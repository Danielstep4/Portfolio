import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { Country, CountryRestAPI, DarkTheme, LightTheme } from 'src/app/global';
import { CountriesService } from 'src/app/services/countries.service';
import { ThemeService } from 'src/app/services/theme.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit, DoCheck {
  @Input() darkMode: boolean | null;
  @Input() currentTheme: DarkTheme | LightTheme | null;
  countries: Country[];

  constructor(
    private countriesService: CountriesService,
    private themeService: ThemeService
  ) {
    this.countries = [];
    this.darkMode = this.themeService.darkMode;
    this.currentTheme = this.themeService.getThemeMode().currentTheme;
  }
  ngDoCheck() {
    if (this.darkMode != this.themeService.getThemeMode().darkMode) {
      const { darkMode, currentTheme } = this.themeService.getThemeMode();
      this.darkMode = darkMode;
      this.currentTheme = currentTheme;
    }
  }
  ngOnInit() {
    this.homePage();
  }
  homePage() {
    this.countriesService
      .getHomePageData()
      .then((result) => (this.countries = result));
  }
  searchByName(text?: string): void {
    if (!text) {
      if (!this.countries.length) {
        this.homePage();
      }
    } else {
      this.countriesService
        .getDataByName(text)
        .then((result) => (this.countries = result));
    }
  }

  searchByRegion(region: CountryRestAPI.Region | '') {
    if (!region) {
      this.homePage();
    } else {
      this.countriesService
        .getDataByRegion(region)
        .then((result) => (this.countries = result));
    }
  }
}

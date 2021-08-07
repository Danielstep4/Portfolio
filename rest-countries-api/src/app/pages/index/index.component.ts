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
  region: CountryRestAPI.Region | '';
  text: string;
  constructor(
    private countriesService: CountriesService,
    private themeService: ThemeService
  ) {
    this.countries = [];
    this.darkMode = this.themeService.darkMode;
    this.currentTheme = this.themeService.getThemeMode().currentTheme;
    this.text = '';
    this.region = '';
  }
  ngDoCheck() {
    if (this.darkMode != this.themeService.getThemeMode().darkMode) {
      const { darkMode, currentTheme } = this.themeService.getThemeMode();
      this.darkMode = darkMode;
      this.currentTheme = currentTheme;
    }
    if (!this.countries.length && !this.region && !this.text) {
      this.homePage();
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
  saveText(text: string): void {
    this.text = text;
    this.search();
  }

  saveRegion(region: CountryRestAPI.Region | '') {
    this.region = region;
    this.search();
  }
  search() {
    if (!this.region && !this.text) this.homePage();
    else {
      this.countriesService
        .getFilteredData(this.region, this.text)
        .then((result) => (this.countries = result));
    }
  }
}

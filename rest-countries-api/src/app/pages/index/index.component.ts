import { Component, OnInit } from '@angular/core';
import { Country, CountryRestAPI, DarkTheme, LightTheme } from '../../global';
import { CountriesService } from '../../services/countries.service';
import { ThemeService } from '../../services/theme.service';
@Component({
  selector: 'index-root',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {
  countries: Country[] = [];
  darkMode: boolean | null;
  currentTheme: LightTheme | DarkTheme | null;
  text: string;
  region: CountryRestAPI.Region | '';

  constructor(
    private countriesService: CountriesService,
    private themeService: ThemeService
  ) {
    this.darkMode = null;
    this.currentTheme = null;
    this.text = '';
    this.region = '';
  }
  ngOnInit(): void {
    this.countriesService
      .getHomePageData()
      .then((result) => (this.countries = result));
    this.updateThemeMode();
  }
  updateThemeMode(): void {
    const { darkMode, currentTheme } = this.themeService.getThemeMode();
    this.currentTheme = currentTheme;
    this.darkMode = darkMode;
  }
  toggleThemeMode(): void {
    this.themeService.toggleThemeMode();
    this.updateThemeMode();
  }
  searchByName(text?: string): void {
    console.log(text);
  }
  searchByRegion(region?: CountryRestAPI.Region | ''): void {
    console.log(region);
  }
}

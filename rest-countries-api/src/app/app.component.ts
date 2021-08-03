import { Component, OnInit } from '@angular/core';
import { Country, DarkTheme, LightTheme } from './global';
import { CountriesService } from './services/countries.service';
import { ThemeService } from './services/theme.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  countries: Country[] = [];
  darkMode: boolean | null;
  currentTheme: LightTheme | DarkTheme | null;
  constructor(
    private countriesService: CountriesService,
    private themeService: ThemeService
  ) {
    this.darkMode = null;
    this.currentTheme = null;
  }
  ngOnInit(): void {
    this.countriesService.getData().then((result) => (this.countries = result));
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
}

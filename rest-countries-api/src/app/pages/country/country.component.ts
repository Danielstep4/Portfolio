import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryProps, DarkTheme, LightTheme } from 'src/app/global';
import { CountriesService } from 'src/app/services/countries.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
})
export class CountryComponent implements OnInit, DoCheck {
  @Input() darkMode?: boolean;
  @Input() currentTheme?: DarkTheme | LightTheme;
  country: CountryProps;
  currentUrl: string;
  constructor(
    private router: Router,
    private countriesService: CountriesService,
    private themeService: ThemeService
  ) {
    this.country = {
      name: '',
      flag: '',
      nativeName: '',
      population: '',
      region: '',
      subregion: '',
      capital: '',
      topLevelDomain: '',
      currencies: '',
      languages: '',
      borders: [],
    };
    this.currentUrl = this.router.url;
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
      this.setCountry();
    });
  }

  ngDoCheck() {
    if (this.darkMode != this.themeService.getThemeMode().darkMode) {
      const { darkMode, currentTheme } = this.themeService.getThemeMode();
      this.darkMode = darkMode;
      this.currentTheme = currentTheme;
    }
  }
  ngOnInit(): void {
    this.setCountry();
  }
  setCountry() {
    this.countriesService
      .getOneCountry(this.currentUrl.replace('/', ''))
      .then((result) => (result ? (this.country = result) : undefined));
  }
}

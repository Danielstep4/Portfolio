import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryProps, DarkTheme, LightTheme } from 'src/app/global';
import { CountriesService } from 'src/app/services/countries.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
})
export class CountryComponent implements OnInit, DoCheck {
  @Input() darkMode: boolean | null;
  @Input() currentTheme: DarkTheme | LightTheme | null;
  country: CountryProps;
  constructor(
    private route: ActivatedRoute,
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
      borderCountries: [],
    };
    this.darkMode = null;
    this.currentTheme = null;
  }
  ngDoCheck() {
    if (this.darkMode != this.themeService.getThemeMode().darkMode) {
      const { darkMode, currentTheme } = this.themeService.getThemeMode();
      this.darkMode = darkMode;
      this.currentTheme = currentTheme;
    }
  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const countryIdFromRoute = routeParams.get('country');
    this.countriesService
      .getOneCountry(countryIdFromRoute)
      .then((result) => (result ? (this.country = result) : undefined));
  }
}

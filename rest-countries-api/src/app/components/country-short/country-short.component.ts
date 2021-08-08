import { Component, Input } from '@angular/core';
import { Country } from 'src/app/global';
import { DarkTheme, LightTheme } from 'src/app/global';

@Component({
  selector: 'app-country-short',
  templateUrl: './country-short.component.html',
})
export class CountryShortComponent {
  @Input() country: Country;
  @Input() darkMode?: boolean;
  @Input() currentTheme?: LightTheme | DarkTheme;

  constructor() {
    this.country = {
      id: '',
      name: '',
      population: '',
      region: '',
      capital: '',
      flag: '',
    };
  }
}

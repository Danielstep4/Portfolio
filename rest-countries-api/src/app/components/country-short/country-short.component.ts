import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/global';
import { DarkTheme, LightTheme } from 'src/app/global';

@Component({
  selector: 'app-country-short',
  templateUrl: './country-short.component.html',
})
export class CountryShortComponent implements OnInit {
  @Input() country: Country;
  @Input() darkMode: boolean | null;
  @Input() currentTheme: LightTheme | DarkTheme | null;

  constructor() {
    this.country = {
      id: '',
      name: '',
      population: '',
      region: '',
      capital: '',
      flag: '',
    };
    this.darkMode = null;
    this.currentTheme = null;
  }
  ngOnInit(): void {}
}

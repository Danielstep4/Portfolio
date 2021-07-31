import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/global';

@Component({
  selector: 'app-country-short',
  templateUrl: './country-short.component.html',
})
export class CountryShortComponent implements OnInit {
  @Input() country: Country;
  constructor() {
    this.country = {
      name: '',
      population: 0,
      region: '',
      capital: '',
      flag: '',
    };
  }
  ngOnInit(): void {}
}

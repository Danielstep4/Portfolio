import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-short',
  templateUrl: './country-short.component.html',
})
export class CountryShortComponent implements OnInit {
  @Input() name: string;
  @Input() population: number;
  @Input() region: string;
  @Input() capital: string;
  constructor() {
    this.name = '';
    this.population = 0;
    this.region = '';
    this.capital = '';
  }
  ngOnInit(): void {}
}

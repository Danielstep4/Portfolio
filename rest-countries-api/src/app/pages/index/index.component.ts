import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Country, CountryRestAPI, DarkTheme, LightTheme } from 'src/app/global';
import { CountriesService } from 'src/app/services/countries.service';
import { ThemeService } from 'src/app/services/theme.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit, OnChanges {
  @Input() darkMode: boolean | null;
  @Input() currentTheme: DarkTheme | LightTheme | null;
  countries: Country[];
  text: string;
  region: string;

  constructor(
    private countriesService: CountriesService,
    private themeService: ThemeService
  ) {
    this.countries = [];
    this.darkMode = null;
    this.currentTheme = null;
    this.text = '';
    this.region = '';
  }
  ngOnInit() {
    this.countriesService
      .getHomePageData()
      .then((result) => (this.countries = result));
  }
  ngOnChanges() {
    console.log('hi');
  }
  searchByName(text?: string): void {
    console.log(text);
  }
  searchByRegion(region?: CountryRestAPI.Region | ''): void {
    console.log(region);
  }
}

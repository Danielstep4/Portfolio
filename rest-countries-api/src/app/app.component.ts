import { Component, OnInit } from '@angular/core';
import { Country } from './global';
import { CountriesService } from './services/countries.service';
import { ThemeService } from './services/theme.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  countries: Country[] = [];
  constructor(
    private countriesService: CountriesService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.countriesService.getData().then((result) => (this.countries = result));
  }
}

import { Component } from '@angular/core';
import axios from 'axios';
import { Country, CountryRestAPI, Theme } from './global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  data: Country[] = [];
  darkMode: boolean = false;
  theme: Theme = {
    pallete: {
      dark: {
        elements: 'hsl(209, 23%, 22%)',
        background: 'hsl(207, 26%, 17%)',
        text: 'hsl(0, 0%, 100%)',
      },
      light: {
        elemetns: 'hsl(0, 0%, 100%)',
        background: 'hsl(0, 0%, 98%)',
        text: 'hsl(200, 15%, 8%)',
        input: 'hsl(0, 0%, 52%)',
      },
    },
  };
  async loadData() {
    try {
      const result = await axios.get('https://restcountries.eu/rest/v2/all');
      const data = result.data as CountryRestAPI.RootObject[];
      if (result.status == 200) {
        const random: number = Math.floor(Math.random() * 20);
        this.data = data
          .filter((_, i, arr) => (i + 1) % random == 0)
          .slice(0, 8)
          .map((country) => ({
            name: country.name,
            population: country.population
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ','),
            region: country.region,
            capital: country.capital,
            flag: country.flag,
          }));
        console.log(this.data);
        return this.data;
      }
    } catch (e) {
      console.log(e);
    }
    return (this.data = []);
  }
}

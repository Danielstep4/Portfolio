import { Component } from '@angular/core';
import axios from 'axios';
import { CountryRestAPI, Theme } from './global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  data: any[] = [];
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
        this.data = data.slice(0, 8).map((name) => ({
          name: name.name,
          popultaion: name.population,
          region: name.region,
          capital: name.capital,
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

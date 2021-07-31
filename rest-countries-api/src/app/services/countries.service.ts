import { Injectable } from '@angular/core';
import axios from 'axios';
import { Country, CountryRestAPI } from '../global';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  data: Country[];
  constructor() {
    this.data = [];
  }
  async loadData() {
    try {
      const result = await axios.get('https://restcountries.eu/rest/v2/all');
      const data = result.data as CountryRestAPI.RootObject[];
      if (result.status == 200) {
        const random: number = Math.floor(Math.random() * 20);
        this.data = data
          .filter((_, i) => (i + 1) % random == 0)
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
        return this.data;
      }
    } catch (e) {
      console.log(e);
    }
    return (this.data = []);
  }
}
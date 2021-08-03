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
  async fetchData() {
    try {
      const result = await axios.get('https://restcountries.eu/rest/v2/all');
      const data = result.data as CountryRestAPI.RootObject[];
      if (result.status == 200) {
        this.data = data.map((country) => ({
          name: country.name,
          population: country.population
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ','),
          region: country.region,
          capital: country.capital,
          flag: country.flag,
        }));
      }
    } catch (e) {
      console.log(e);
    }
  }
  async getHomePageData(): Promise<Country[]> {
    await this.fetchData();
    const random: number = Math.floor(Math.random() * 20);
    return this.data.filter((_, i) => (i + 1) % random == 0).slice(0, 8);
  }
  async getDataByRegion(region: string): Promise<Country[]> {
    if (!this.data.length) {
      await this.fetchData();
    }
    return this.data.filter((country) => country.region == region);
  }
  async getDataByName(name: string): Promise<Country[]> {
    if (!this.data.length) {
      await this.fetchData();
    }
    return this.data.filter((country) => country.name.includes(name));
  }
}

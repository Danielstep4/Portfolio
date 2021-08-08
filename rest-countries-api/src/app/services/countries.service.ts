import { Injectable } from '@angular/core';
import axios from 'axios';
import { Country, CountryProps, CountryRestAPI } from '../global';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  data: Country[];
  constructor() {
    this.data = JSON.parse(
      sessionStorage.getItem('countries') || '[]'
    ) as Country[];
  }
  async fetchData() {
    if (!this.data.length) {
      try {
        const result = await axios.get('https://restcountries.eu/rest/v2/all');
        const data = result.data as CountryRestAPI.RootObject[];
        if (result.status == 200) {
          this.data = data.map((country) => ({
            id: country.alpha2Code.toLowerCase(),
            name: country.name,
            population: this.intWithCommas(country.population),
            region: country.region,
            capital: country.capital,
            flag: country.flag,
          }));
          sessionStorage.setItem('countries', JSON.stringify(this.data));
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
  async getHomePageData(): Promise<Country[]> {
    if (!this.data.length) {
      await this.fetchData();
    }
    const random: number = Math.floor(Math.random() * 20);
    return this.data.filter((_, i) => (i + 1) % random == 0).slice(0, 8);
  }
  async getFilteredData(
    region: CountryRestAPI.Region | '',
    name: string
  ): Promise<Country[]> {
    if (!this.data.length) {
      await this.fetchData();
    }
    return region
      ? this.data.filter(
          (country) =>
            country.region == region &&
            country.name.toLowerCase().includes(name)
        )
      : this.data.filter((country) =>
          country.name.toLowerCase().includes(name)
        );
  }
  async getOneCountry(countryID: string | null): Promise<CountryProps | void> {
    if (!countryID) return;
    try {
      const result = await axios.get(
        `https://restcountries.eu/rest/v2/alpha/${countryID}`
      );
      const country = result.data as CountryRestAPI.RootObject;
      return {
        name: country.name,
        nativeName: country.nativeName,
        flag: country.flag,
        population: this.intWithCommas(country.population),
        region: country.region,
        subregion: country.subregion,
        capital: country.capital,
        topLevelDomain: country.topLevelDomain.join(', '),
        currencies: country.currencies[0].name,
        languages: country.languages.map((lan) => lan.name).join(', '),
        borders: country.borders,
      };
    } catch (e) {
      console.log(e);
    }
  }
  intWithCommas(int: number) {
    return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

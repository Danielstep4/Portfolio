export interface DarkTheme {
  elements: string;
  background: string;
  text: string;
  input: string;
}
export interface LightTheme {
  elements: string;
  background: string;
  text: string;
  input: string;
}
export interface Theme {
  pallete: {
    dark: DarkTheme;
    light: LightTheme;
  };
}
export interface Country {
  id: string;
  name: string;
  population: string;
  region: string;
  capital: string;
  flag: string;
}
export interface CountryProps {
  name: string;
  flag: string;
  nativeName: string;
  population: string;
  region: CountryRestAPI.Region | '';
  subregion: string;
  capital: string;
  topLevelDomain: string;
  currencies: string;
  languages: string;
  borders: string[];
}
declare module CountryRestAPI {
  export interface Currency {
    code: string;
    name: string;
    symbol: string;
  }

  export interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }

  export interface Translations {
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
  }

  export interface RegionalBloc {
    acronym: string;
    name: string;
    otherAcronyms: string[];
    otherNames: string[];
  }
  export type Region = 'Asia' | 'Europe' | 'Africa' | 'America' | 'Ociana';
  export interface RootObject {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: Region;
    subregion: string;
    population: number;
    latlng: number[];
    demonym: string;
    area?: number;
    gini?: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    currencies: Currency[];
    languages: Language[];
    translations: Translations;
    flag: string;
    regionalBlocs: RegionalBloc[];
    cioc: string;
  }
}

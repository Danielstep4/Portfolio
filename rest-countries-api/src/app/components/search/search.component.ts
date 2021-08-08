import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DarkTheme, LightTheme, CountryRestAPI } from 'src/app/global';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @Input() darkMode?: boolean;
  @Input() currentTheme?: LightTheme | DarkTheme;
  @Output() searchByName: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchByRegion: EventEmitter<CountryRestAPI.Region | ''> =
    new EventEmitter<CountryRestAPI.Region | ''>();
  text: string = '';
  region: CountryRestAPI.Region | '' = '';
  constructor() {}
  handleChangeRegion(region: CountryRestAPI.Region | '') {
    this.searchByRegion.emit(region);
  }
  handleChangeText(text: string) {
    this.searchByName.emit(text.trim());
  }
}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DarkTheme, LightTheme, CountryRestAPI } from 'src/app/global';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  @Input() darkMode: boolean | null;
  @Input() currentTheme: LightTheme | DarkTheme | null;
  @Output() searchByName: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchByRegion: EventEmitter<string> = new EventEmitter<string>();
  text: string = '';
  region: CountryRestAPI.Region | '' = '';
  constructor() {
    this.darkMode = null;
    this.currentTheme = null;
  }
  ngOnInit(): void {}
  handleChangeRegion(region: CountryRestAPI.Region | '') {
    this.searchByRegion.emit(region);
  }
  handleChangeText(text: string) {
    this.searchByName.emit(text);
  }
}

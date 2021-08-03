import { Component, Input, OnInit } from '@angular/core';
import { DarkTheme, LightTheme } from 'src/app/global';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  @Input() darkMode: boolean | null;
  @Input() currentTheme: LightTheme | DarkTheme | null;

  constructor() {
    this.darkMode = null;
    this.currentTheme = null;
  }
  ngOnInit(): void {}
}

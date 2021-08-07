import { Component, OnInit } from '@angular/core';
import { DarkTheme, LightTheme } from './global';
import { CountryComponent } from './pages/country/country.component';
import { IndexComponent } from './pages/index/index.component';
import { ThemeService } from './services/theme.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  darkMode: boolean | null;
  currentTheme: LightTheme | DarkTheme | null;

  constructor(private themeService: ThemeService) {
    this.darkMode = null;
    this.currentTheme = null;
  }
  ngOnInit(): void {
    this.updateThemeMode();
  }
  updateThemeMode(): void {
    const { darkMode, currentTheme } = this.themeService.getThemeMode();
    this.currentTheme = currentTheme;
    this.darkMode = darkMode;
  }
  toggleThemeMode(): void {
    this.themeService.toggleThemeMode();
    this.updateThemeMode();
  }
  onChildLoaded(component: IndexComponent | CountryComponent) {
    component.currentTheme = this.currentTheme;
    component.darkMode = this.darkMode;
  }
}

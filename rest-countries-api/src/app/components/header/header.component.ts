import { Component, Input, OnInit } from '@angular/core';
import { DarkTheme, LightTheme } from 'src/app/global';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  darkMode: boolean | null;
  currentTheme: LightTheme | DarkTheme | null;
  constructor(private themeService: ThemeService) {
    this.darkMode = null;
    this.currentTheme = null;
  }

  ngOnInit(): void {
    this.themeService.getThemeMode().subscribe(({ darkMode, currentTheme }) => {
      this.currentTheme = currentTheme;
      this.darkMode = darkMode;
    });
  }
  toggleThemeMode(): void {
    this.themeService.darkMode = !this.themeService.darkMode;
    this.themeService.getThemeMode().subscribe(({ darkMode, currentTheme }) => {
      this.currentTheme = currentTheme;
      this.darkMode = darkMode;
    });
  }
}

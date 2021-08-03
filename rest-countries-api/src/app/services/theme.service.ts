import { Injectable } from '@angular/core';
import { DarkTheme, LightTheme, Theme } from '../global';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  darkMode: boolean;
  theme: Theme;
  constructor() {
    this.darkMode = true;
    this.theme = {
      pallete: {
        dark: {
          elements: 'hsl(209, 23%, 22%)',
          background: 'hsl(207, 26%, 17%)',
          text: 'hsl(0, 0%, 100%)',
        },
        light: {
          elements: 'hsl(0, 0%, 100%)',
          background: 'hsl(0, 0%, 98%)',
          text: 'hsl(200, 15%, 8%)',
          input: 'hsl(0, 0%, 52%)',
        },
      },
    };
  }

  getThemeMode(): {
    darkMode: boolean;
    currentTheme: DarkTheme | LightTheme;
  } {
    return {
      darkMode: this.darkMode,
      currentTheme: this.darkMode
        ? this.theme.pallete.dark
        : this.theme.pallete.light,
    };
  }
  setThemeMode(): void {
    this.darkMode = !this.darkMode;
  }
}

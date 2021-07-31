import { Injectable } from '@angular/core';
import { Theme } from '../global';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  darkMode: boolean;
  theme: Theme;
  constructor() {
    this.darkMode = false;
    this.theme = {
      pallete: {
        dark: {
          elements: 'hsl(209, 23%, 22%)',
          background: 'hsl(207, 26%, 17%)',
          text: 'hsl(0, 0%, 100%)',
        },
        light: {
          elemetns: 'hsl(0, 0%, 100%)',
          background: 'hsl(0, 0%, 98%)',
          text: 'hsl(200, 15%, 8%)',
          input: 'hsl(0, 0%, 52%)',
        },
      },
    };
  }
}

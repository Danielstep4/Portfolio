import { Component } from '@angular/core';
import { Theme } from './global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  darkMode: boolean = false;
  theme: Theme = {
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

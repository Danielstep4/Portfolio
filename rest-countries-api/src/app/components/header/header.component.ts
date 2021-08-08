import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DarkTheme, LightTheme } from 'src/app/global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() darkMode?: boolean;
  @Input() currentTheme?: LightTheme | DarkTheme;
  @Output() toggleTheme: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
  toggleThemeMode(): void {
    this.toggleTheme.emit('toggleTheme');
  }
}

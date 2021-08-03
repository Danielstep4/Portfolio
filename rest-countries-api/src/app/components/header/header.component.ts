import { Component, Input, OnInit } from '@angular/core';
import { DarkTheme, LightTheme } from 'src/app/global';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input() darkMode: boolean | null;
  @Input() currentTheme: LightTheme | DarkTheme | null;
  constructor(private themeService: ThemeService) {
    this.darkMode = null;
    this.currentTheme = null;
  }
  ngOnInit(): void {}
  toggleThemeMode(): void {
    this.themeService.setThemeMode();
  }
}

import { ThemeService } from './theme.service';

describe('Testing Theme Service', () => {
  let service: ThemeService;

  beforeEach(() => {
    service = new ThemeService();
  });

  it('getThemeMode shouldd return object w/ themeMode and theme pallete', () => {
    const { darkMode, currentTheme } = service.getThemeMode();
    let theme = service.darkMode
      ? service.theme.pallete.dark
      : service.theme.pallete.light;
    expect(darkMode).toBe(service.darkMode);
    expect(darkMode).toBeDefined();
    expect(currentTheme).toBeDefined();
    expect(currentTheme).toBe(theme);
  });
  it('toggleThemeMode should toggle theme', () => {
    const initialDarkMode = service.darkMode;
    service.toggleThemeMode();
    expect(service.darkMode).not.toBe(initialDarkMode);
  });
});

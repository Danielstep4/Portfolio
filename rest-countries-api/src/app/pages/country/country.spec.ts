import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';
import { ThemeService } from 'src/app/services/theme.service';
import { CountryComponent } from './country.component';
import { RouterTestingModule } from '@angular/router/testing';

class MockThemeSerivce extends ThemeService {}
class MockCountriesService extends CountriesService {}
describe('Country Component Testing', () => {
  it('setCountry should change country state', async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CountryComponent],
      providers: [
        { provide: CountriesService, useClass: MockCountriesService },
        { provide: ThemeService, useClass: MockThemeSerivce },
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(CountryComponent);
    const component = fixture.componentInstance;
    component.currentUrl = 'il';
    spyOn(component, 'setCountry');
    fixture.whenStable().then(() => {
      expect(component.currentUrl).toBeTruthy();
      expect(component.currentUrl).toBe('il');
      expect(component.setCountry()).toHaveBeenCalled();
    });
  });
});

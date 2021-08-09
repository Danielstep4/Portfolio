import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountriesService } from 'src/app/services/countries.service';
import { ThemeService } from 'src/app/services/theme.service';
import { IndexComponent } from './index.component';
class MockThemeSerivce extends ThemeService {}
class MockCountriesService extends CountriesService {}
describe('IndexComponent', () => {
  let fixture: ComponentFixture<IndexComponent>;
  let component: IndexComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexComponent],
      providers: [
        { provide: CountriesService, useClass: MockCountriesService },
        { provide: ThemeService, useClass: MockThemeSerivce },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
  });

  it('should call homePage on init', () => {
    spyOn(component, 'homePage');
    fixture.whenStable().then(() => {
      expect(component.homePage).toHaveBeenCalled();
    });
  });
  it('should save text', () => {
    component.saveText('daniel');
    expect(component.text).toEqual('daniel');
  });
  it('should save region', () => {
    component.saveRegion('Americas');
    expect(component.region).toEqual('Americas');
  });
  it('search should call homePage if region and text falsy', () => {
    fixture.whenStable().then(() => {
      spyOn(component, 'homePage');
      component.region = '';
      component.text = '';
      component.search();
      expect(component.homePage).toHaveBeenCalled();
    });
  });
});

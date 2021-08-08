import { CountriesService } from 'src/app/services/countries.service';
import { ThemeService } from 'src/app/services/theme.service';
import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component = new IndexComponent(
    new CountriesService(),
    new ThemeService()
  );
  it('should save text', () => {
    component.saveText('daniel');
    expect(component.text).toEqual('daniel');
  });
  it('should save region', () => {
    component.saveRegion('Americas');
    expect(component.region).toEqual('Americas');
  });
});

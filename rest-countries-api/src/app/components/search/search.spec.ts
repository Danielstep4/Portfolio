import { Input } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';

describe('Search Component testing', () => {
  it('Region select input emits event searchByRegion', () => {
    const fixture = TestBed.createComponent(SearchComponent);
    const component = fixture.componentInstance;
    spyOn(component.searchByRegion, 'emit');
    const nativeElement = fixture.nativeElement;
    const selectElement = nativeElement.querySelector(
      'select'
    ) as HTMLSelectElement;
    selectElement.value = selectElement.options[3].value;

    selectElement.dispatchEvent(new Event('change'));
    fixture.whenStable().then(() => {
      expect(component.searchByRegion.emit).toHaveBeenCalledOnceWith('Africa');
    });
  });
  it('Text input emits event searchByName', () => {
    const fixture = TestBed.createComponent(SearchComponent);
    const component = fixture.componentInstance;
    spyOn(component.searchByName, 'emit');
    const nativeElement = fixture.nativeElement;
    const input = nativeElement.querySelector('input') as HTMLSelectElement;
    input.value = 'Israel';

    input.dispatchEvent(new Event('keyup'));
    fixture.whenStable().then(() => {
      expect(component.searchByName.emit).toHaveBeenCalledOnceWith('israel');
    });
  });
});

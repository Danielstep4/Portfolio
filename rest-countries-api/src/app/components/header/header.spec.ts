import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('Header methods tests', () => {
  it('toggleTheme should emit an event', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    spyOn(component.toggleTheme, 'emit');
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button') as HTMLButtonElement;
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.toggleTheme.emit).toHaveBeenCalled();
    expect(component.toggleTheme.emit).toHaveBeenCalledWith('toggleTheme');
  });
});

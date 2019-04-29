import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show logo', () => {

    expect(fixture.nativeElement.querySelector('[data-test="logo"]')).toBeTruthy();

  });

  it('should show search', () => {

    expect(fixture.nativeElement.querySelector('[data-test="search"]')).toBeTruthy();

  });

  it('should show menu', () => {

    expect(fixture.nativeElement.querySelector('[data-test="menu"]')).toBeTruthy();

  });

  it('should filters', () => {

    expect(fixture.nativeElement.querySelector('[data-test="home-type"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="dates"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="guests"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="price"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="rooms"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="amenities"]')).toBeTruthy();

  });
});

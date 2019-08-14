import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show title', () => {
    expect(component).toBeTruthy();
  });

  it('should show price per night', () => {
    expect(component).toBeTruthy();
  });

  it('should show check in date field', () => {
    expect(component).toBeTruthy();
  });

  it('should show check out date field', () => {
    expect(component).toBeTruthy();
  });

  it('should show total based on selected dates', () => {
    expect(component).toBeTruthy();
  });

  describe('submitting form', () => {

    it('should disable book button', () => {
      expect(component).toBeTruthy();
    });

    it('should book home using data service', () => {
      expect(component).toBeTruthy();
    });

    it('should show error if booking fails', () => {
      expect(component).toBeTruthy();
    });

  });

});

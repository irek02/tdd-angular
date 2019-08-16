import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { spyOnClass } from 'jasmine-es6-spies';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let dialog: jasmine.SpyObj<MatDialogRef<BookComponent>>;

  let dialogData: {
    name: string;
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookComponent],
      providers: [
        { provide: MatDialogRef, useFactory: () => spyOnClass(MatDialogRef) },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    dialogData = TestBed.get(MAT_DIALOG_DATA);

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

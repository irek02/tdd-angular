import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { spyOnClass } from 'jasmine-es6-spies';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

fdescribe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  // let dialog: jasmine.SpyObj<MatDialogRef<BookComponent>>;
  let dialogData;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookComponent],
      imports: [FormsModule],
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
    const homes = require('../../../../assets/homes.json');

    dialogData = TestBed.get(MAT_DIALOG_DATA);
    dialogData.home = homes[0];

    fixture.detectChanges();
  });

  it('should show title', () => {

    expect(fixture.nativeElement.querySelector('[data-test="title"]').textContent).toEqual('Home 1');

  });

  it('should show price per night', () => {

    expect(fixture.nativeElement.querySelector('[data-test="price"]').textContent).toEqual('$120 per night');

  });

  it('should show check in date field', () => {

    expect(fixture.nativeElement.querySelector('[data-test="check-in"]')).toBeTruthy();

  });

  it('should show check out date field', () => {

    expect(fixture.nativeElement.querySelector('[data-test="check-out"]')).toBeTruthy();

  });

  it('should show total based on selected dates', () => {

    const checkInField = fixture.nativeElement.querySelector('[data-test="check-in"] input');
    checkInField.value = '12/20/19';

    const checkOutField = fixture.nativeElement.querySelector('[data-test="check-out"] input');
    checkOutField.value = '12/23/19';

    checkInField.dispatchEvent(new Event('input'));
    checkOutField.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('[data-test="total"]').textContent).toEqual('$360');

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

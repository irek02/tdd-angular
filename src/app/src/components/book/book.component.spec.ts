import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { spyOnClass } from 'jasmine-es6-spies';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { of } from 'rxjs';
import { NotificationService } from '../../services/notification.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let dialog: jasmine.SpyObj<MatDialogRef<BookComponent>>;
  let dialogData;
  let dataService: jasmine.SpyObj<DataService>;
  let notificationService: jasmine.SpyObj<NotificationService>;

  const el = (selector) => fixture.nativeElement.querySelector(selector);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookComponent],
      imports: [
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MatDialogRef, useFactory: () => spyOnClass(MatDialogRef) },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: DataService, useFactory: () => spyOnClass(DataService) },
        { provide: NotificationService, useFactory: () => spyOnClass(NotificationService) },
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
    dataService = TestBed.get(DataService);
    dialog = TestBed.get(MatDialogRef);
    notificationService = TestBed.get(NotificationService);

    fixture.detectChanges();
  });

  it('should show title', () => {

    expect(el('[data-test="title"]').textContent)
      .toContain('Book Home 1 in new york');

  });

  it('should show price per night', () => {

    expect(el('[data-test="price"]').textContent)
      .toContain('$120');

  });

  it('should show check in date field', () => {

    expect(el('[data-test="check-in"]'))
      .toBeTruthy();

  });

  it('should show check out date field', () => {

    expect(el('[data-test="check-out"]'))
      .toBeTruthy();

  });

  it('should show total based on selected dates', () => {

    const checkInField = el('[data-test="check-in"] input');
    checkInField.value = '12/20/19';

    const checkOutField = el('[data-test="check-out"] input');
    checkOutField.value = '12/23/19';

    checkInField.dispatchEvent(new Event('input'));
    checkOutField.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(el('[data-test="total"]').textContent)
      .toContain('$360');

  });

  it('should book home after clicking book button', () => {

    dataService.bookHome$.and.returnValue(of(null));

    // enter dates
    const checkInField = el('[data-test="check-in"] input');
    checkInField.value = '12/20/19';

    const checkOutField = el('[data-test="check-out"] input');
    checkOutField.value = '12/23/19';

    checkInField.dispatchEvent(new Event('input'));
    checkOutField.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // click the Book button
    el('[data-test="book"] button').click();
    fixture.detectChanges();

    // assert that it called the service method with proper data.
    expect(dataService.bookHome$)
      .toHaveBeenCalledWith('12/20/19', '12/23/19');

  });

  it('should close dialog and post message after clicking book button', () => {

    dataService.bookHome$.and.returnValue(of(null));

    // enter dates
    const checkInField = el('[data-test="check-in"] input');
    checkInField.value = '12/20/19';

    const checkOutField = el('[data-test="check-out"] input');
    checkOutField.value = '12/23/19';

    checkInField.dispatchEvent(new Event('input'));
    checkOutField.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // click the Book button
    el('[data-test="book"] button').click();
    fixture.detectChanges();

    // assert that the dialog closed
    expect(dialog.close).toHaveBeenCalled();

    // assert that the message was displayed
    expect(notificationService.post).toHaveBeenCalled();

  });

  it('should show nothing for total when date range is invalid', () => {

    // enter dates
    const checkInField = el('[data-test="check-in"] input');
    checkInField.value = '12/23/19';

    const checkOutField = el('[data-test="check-out"] input');
    checkOutField.value = '12/20/19';

    checkInField.dispatchEvent(new Event('input'));
    checkOutField.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    fixture.detectChanges();

    expect(el('[data-test="total"]').textContent).toBe('');

  });

});

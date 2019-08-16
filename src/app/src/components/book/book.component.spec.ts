import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { spyOnClass } from 'jasmine-es6-spies';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  // let dialog: jasmine.SpyObj<MatDialogRef<BookComponent>>;
  let dialogData;
  let dataService: jasmine.SpyObj<DataService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookComponent],
      imports: [FormsModule],
      providers: [
        { provide: MatDialogRef, useFactory: () => spyOnClass(MatDialogRef) },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: DataService, useFactory: () => spyOnClass(DataService) },
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

  it('should book home after clicking book button', () => {

    // enter dates
    const checkInField = fixture.nativeElement.querySelector('[data-test="check-in"] input');
    checkInField.value = '12/20/19';

    const checkOutField = fixture.nativeElement.querySelector('[data-test="check-out"] input');
    checkOutField.value = '12/23/19';

    checkInField.dispatchEvent(new Event('input'));
    checkOutField.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // click the Book button
    fixture.nativeElement.querySelector('[data-test="book"] button').click();
    fixture.detectChanges();

    // assert that it called the service method with proper data.
    expect(dataService.bookHome$).toHaveBeenCalledWith('12/20/19', '12/23/19');

  });

});

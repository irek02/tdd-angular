import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let dialogData;

  const el = (selector) => fixture.nativeElement.querySelector(selector);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    dialogData = TestBed.get(MAT_DIALOG_DATA);
    component = fixture.componentInstance;

    const homes = require('../../../../assets/homes.json');
    dialogData.home = homes[0];
    fixture.detectChanges();
  });

  it('should show title', () => {

    expect(el('[data-test="title"]').textContent)
      .toContain('Home 1');

  });

  it('should show price', () => {

    expect(el('[data-test="price"]').textContent)
      .toContain('125');

  });

  it('should show check in date field', () => {

    expect(el('[data-test="check-in"]'))
      .toBeTruthy();

  });

  it('should show check out date field', () => {

    expect(el('[data-test="check-out"]'))
      .toBeTruthy();

  });

  // should show total
  // should book home after clicking the Book button


});

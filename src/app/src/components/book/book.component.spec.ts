import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let dialogData;

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

    expect(fixture.nativeElement.querySelector('[data-test="title"]').textContent).toContain('Home 1');

  });

  // should show price
  // should show check in date field
  // should show check out date field
  // should show total
  // should book home after clicking the Book button


});

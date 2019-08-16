import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})
export class BookComponent implements OnInit {

  checkIn;
  checkOut;

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  calculateTotal(checkIn, checkOut) {

    return moment(checkOut).diff(moment(checkIn), 'days') * this.data.home.price;

  }

}

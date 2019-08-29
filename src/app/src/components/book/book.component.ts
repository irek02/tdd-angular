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

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  calculateTotal(checkIn, checkOut) {

    // console.log(checkIn, checkOut);
    // find the difference between the dates which will give the number of nights.
    const checkInDate = moment(checkIn, 'MM-DD-YY');
    const checkOutDate = moment(checkOut, 'MM-DD-YY');
    const nights = checkOutDate.diff(checkInDate, 'days');
    // multiply the number of night by the price 125x3
    return nights * this.data.home.price;

  }

}

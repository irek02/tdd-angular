import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { DataService } from '../../services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})
export class BookComponent implements OnInit {

  checkIn;
  checkOut;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService,
    public dialogRef: MatDialogRef<BookComponent>,
    private snackBar: MatSnackBar
  ) { }

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

  bookHome() {

    this.dataService.bookHome$().subscribe(() => {
      this.dialogRef.close();
      this.snackBar.open('Home booked!', null, {
        duration: 2000,
      });
    });

  }

}

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

    const checkInDate = moment(checkIn, 'MM-DD-YY');
    const checkOutDate = moment(checkOut, 'MM-DD-YY');
    const nights = checkOutDate.diff(checkInDate, 'days');

    const total = nights * this.data.home.price;

    if (total > 0 && total < 900000) {
      return '$' + total;
    } else {
      return '--';
    }

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

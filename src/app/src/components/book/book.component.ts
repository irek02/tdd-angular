import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { DataService } from '../../services/data.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})
export class BookComponent implements OnInit {

  checkIn;
  checkOut;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<BookComponent>,
    private dataService: DataService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  }

  calculateTotal(checkIn, checkOut) {

    const checkInDate = moment(checkIn, 'MM-DD-YY');
    const checkOutDate = moment(checkOut, 'MM-DD-YY');

    return checkOutDate.diff(checkInDate, 'days') * this.data.home.price;

  }

  book(checkIn, checkOut) {

    this.dataService.bookHome$(checkIn, checkOut)
      .subscribe(() => {
        this.dialogRef.close();
        this.notificationService.post('Home booked!');
      });

  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.less']
})
export class HomesComponent implements OnInit {

  homes$;

  constructor(private dataService: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.homes$ = this.dataService.getHomes$();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BookComponent, {
      width: '250px',
      data: { name: 'hello' }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

}

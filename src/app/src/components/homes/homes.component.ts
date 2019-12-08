import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DialogService } from '../../services/dialog.service';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.less']
})
export class HomesComponent implements OnInit {

  homes$;

  constructor(
    private dataService: DataService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.homes$ = this.dataService.getHomes$();
  }

  openDialog(home) {
    this.dialogService.open(BookComponent, {
      width: '500px',
      data: { home }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.less']
})
export class HomesComponent implements OnInit {

  homes$ = of([
    {
      title: 'Home 1',
      image: 'assets/listing.jpg',
      location: 'new york',
    },
    {
      title: 'Home 2',
      image: 'assets/listing.jpg',
      location: 'boston',
    },
    {
      title: 'Home 3',
      image: 'assets/listing.jpg',
      location: 'chicago',
    }
  ]);

  constructor() { }

  ngOnInit() {
  }

}

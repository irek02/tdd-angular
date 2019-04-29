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
      image: 'url/home1',
      location: 'new york',
    },
    {
      title: 'Home 2',
      image: 'url/home2',
      location: 'boston',
    },
    {
      title: 'Home 3',
      image: 'url/home3',
      location: 'chicago',
    }
  ]);

  constructor() { }

  ngOnInit() {
  }

}

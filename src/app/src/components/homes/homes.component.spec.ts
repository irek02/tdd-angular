import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesComponent } from './homes.component';
import { DataService } from '../../services/data.service';
import { of } from 'rxjs';

describe('HomesComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;
  let dataService: DataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {

    dataService = TestBed.get(DataService);

    spyOn(dataService, 'getHomes$').and.returnValue(of([
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
    ]));

    fixture.detectChanges();

  });

  it('should show homes', () => {

    expect(fixture.nativeElement.querySelectorAll('[data-test="home"]').length).toBe(3);

  });

  it('should show home info', () => {

    const home = fixture.nativeElement.querySelector('[data-test="home"]');

    expect(home.querySelector('[data-test="image"]')).toBeTruthy();
    expect(home.querySelector('[data-test="title"]').innerText).toEqual('Home 1');
    expect(home.querySelector('[data-test="location"]').innerText).toEqual('new york');

  });
});

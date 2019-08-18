import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getHomes$() {

    return this.httpClient.get('assets/homes.json');

  }

  bookHome$(checkIn, checkOut): Observable<void> {

    return of(null);

  }
}

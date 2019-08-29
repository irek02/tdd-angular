import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getHomes$() {

    return this.httpClient.get('assets/homes.json');

  }

  bookHome$() {

    return this.httpClient.post('http://www.mocky.io/v2/5d674012330000f9ae44a00e', {});

  }
}

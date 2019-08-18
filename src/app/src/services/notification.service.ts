import { Injectable } from '@angular/core';
declare var UIkit: any;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  post(msg) {
    UIkit.notification({
      message: msg,
      status: 'success',
      pos: 'bottom-center',
      timeout: 5000
    });
  }
}

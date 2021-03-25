import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public number = 2;
  public numberx = new Subject<void>();
  public numberEnd$ = this.numberx.asObservable();

  constructor() { }

  public viewLogin() {
      this.numberx.next();
  }
}

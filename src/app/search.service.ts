import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
 private  stringSource = new BehaviorSubject('');
 courentSearch = this.stringSource.asObservable();

  constructor( ){ }
  changeValue(message: string): any {
    this.stringSource.next(message);
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {BienModel} from '../biens/list-bien/item-bien/bienModel';
import {BienService} from '../biens/bienService';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 search: '' ;
  constructor() { }
  searchElement = new EventEmitter<string>();

  searchThis(): void {
    this.searchElement.emit(this.search);
  }
  ngOnInit(): void {
  }

}

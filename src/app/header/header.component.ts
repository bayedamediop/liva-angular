import {Component, Input, OnInit} from '@angular/core';
import {BienModel} from '../biens/list-bien/item-bien/bienModel';
import {BienService} from '../biens/bienService';
import {EventEmitter} from 'events';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 search: string ;
  constructor(private data: SearchService) { }

  newMessage(search){
    this.data.changeValue(search);
  }
  ngOnInit(): void {
    this.data.courentSearch.subscribe
    (search => this.search = search);
  }
}

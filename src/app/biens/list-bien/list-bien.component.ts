import {Component, Input, OnInit} from '@angular/core';
import {Data} from '@angular/router';
import { BienModel} from './item-bien/bienModel';
import {BienService} from '../bienService';
import {SearchService} from '../../search.service';

@Component({
  selector: 'app-list-bien',
  templateUrl: './list-bien.component.html',
  styleUrls: ['./list-bien.component.css']
})
export class ListBienComponent implements OnInit {
  biens: BienModel[] = [];
 search = '';
  constructor( private  service: BienService, private searchService: SearchService) { }
newValue(){
    this.searchService.changeValue(this.search);
}
  ngOnInit(): void {
    this.newValue();
    this.biens = this.service.getAllBien();
    this.searchService.courentSearch.subscribe(
      search => this.search = search
    );
  }

}

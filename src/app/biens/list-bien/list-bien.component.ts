import {Component, Input, OnInit} from '@angular/core';
import {Data} from '@angular/router';
import { BienModel} from './item-bien/bienModel';
import {BienService} from '../bienService';

@Component({
  selector: 'app-list-bien',
  templateUrl: './list-bien.component.html',
  styleUrls: ['./list-bien.component.css']
})
export class ListBienComponent implements OnInit {
  biens: BienModel[] = [];
  @Input() search = '';
  constructor( private  service: BienService) { }

  ngOnInit(): void {
    this.biens = this.service.getAllBien();
  }

}

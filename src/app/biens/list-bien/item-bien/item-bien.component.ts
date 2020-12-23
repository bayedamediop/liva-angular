import {Component, Input, OnInit} from '@angular/core';
import {BienModel} from './bienModel';
import {ServicesService} from '../../../services.service';
import {BienService} from '../../bienService';

@Component({
  selector: 'app-item-bien',
  templateUrl: './item-bien.component.html',
  styleUrls: ['./item-bien.component.css']
})
export class ItemBienComponent implements OnInit {
  constructor() {
  }
  @Input() bien: BienModel;
  // @Input() title = '';
  // @Input() description = '';
  // @Input() image = '';
  // @Input() price = '';

  ngOnInit(): void {
  }
}

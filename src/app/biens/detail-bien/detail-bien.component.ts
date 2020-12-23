import { Component, OnInit } from '@angular/core';
import {BienModel} from '../list-bien/item-bien/bienModel';
import {BienService} from '../bienService';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.css']
})
export class DetailBienComponent implements OnInit {
bien: BienModel;
  constructor( private service: BienService, private activateRoute: ActivatedRoute) { }
// snapshap slug
  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params.id;
    this.bien = this.service.getBienById(+ id);
    // for next time that this component will be loaded
    this.activateRoute.params
      .subscribe(
        (p: Params) => {
          // tslint:disable-next-line:no-shadowed-variable
          const id = + p.id;
          this.bien = this.service.getBienById(+ id);
        },
      );
  }

}

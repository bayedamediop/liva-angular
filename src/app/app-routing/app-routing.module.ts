import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListBienComponent} from '../biens/list-bien/list-bien.component';
import {AddBienComponent} from '../biens/add-bien/add-bien.component';
import {DetailBienComponent} from '../biens/detail-bien/detail-bien.component';
import {ReservationBienComponent} from '../biens/reservation-bien/reservation-bien.component';
import {DetailsReservationComponent} from '../biens/reservation-bien/details-reservation/details-reservation.component';
import {EditReservationComponent} from '../biens/reservation-bien/edit-reservation/edit-reservation.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';

// @ts-ignore
const appRoute: Routes = [
  { path: '', redirectTo: '/biens', pathMatch: 'full'},
  { path: 'biens', component: ListBienComponent},
  { path: 'biens/add', component: AddBienComponent},
  { path: 'biens/:id', component: DetailBienComponent},

  { path: 'reservations',
    component: ReservationBienComponent,
    children: [
      { path: ':id', component: DetailsReservationComponent},
      { path: ':id/edit', component: EditReservationComponent},
    ]
  },
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

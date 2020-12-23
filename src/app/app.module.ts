import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { BiensComponent } from './biens/biens.component';
import { AddBienComponent } from './biens/add-bien/add-bien.component';
import { DetailBienComponent } from './biens/detail-bien/detail-bien.component';
import { ListBienComponent } from './biens/list-bien/list-bien.component';
import { JumbotronBienComponent } from './biens/jumbotron-bien/jumbotron-bien.component';
import { SeparatorPipe } from './pipes/separator.pipe';
import { TimeLeftePipe } from './pipes/time-lefte.pipe';
import { SummarizePipe } from './pipes/summarize.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import {RouterModule, Routes} from '@angular/router';
import {ItemBienComponent} from './biens/list-bien/item-bien/item-bien.component';
import {HeaderComponent} from './header/header.component';
import { ReservationBienComponent } from './biens/reservation-bien/reservation-bien.component';
import { DetailsReservationComponent } from './biens/reservation-bien/details-reservation/details-reservation.component';
import { EditReservationComponent } from './biens/reservation-bien/edit-reservation/edit-reservation.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


// pour mettre l' ensemble de nos routees
@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    FooterComponent,
    BiensComponent,
    AddBienComponent,
    DetailBienComponent,
    ListBienComponent,
    ItemBienComponent,
    JumbotronBienComponent,
    SeparatorPipe,
    TimeLeftePipe,
    SummarizePipe,
    FilterPipe,
    ReservationBienComponent,
    DetailsReservationComponent,
    EditReservationComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

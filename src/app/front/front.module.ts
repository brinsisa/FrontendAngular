
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutFrontComponent } from './about-front/about-front.component';
import { ContentFrontComponent } from './content-front/content-front.component';
import { ReservationFrontComponent } from './reservation-front/reservation-front.component';
import { DealsFrontComponent } from './deals-front/deals-front.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FrontRoutingModule } from './front-routing.module';
import { FooterFrontComponent } from './footer-front/footer-front.component';
import { FrontComponent } from './front.component';
import { NavFrontComponent } from './nav-front/nav-front.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AddcommentComponent } from '../gestion/gestionCommentaire/addcomment/addcomment.component';
import { AddreponseComponent } from '../gestion/gestionReponse/addreponse/addreponse.component';
import { DisplayCommentReponseComponent } from '../gestion/gestionCommentaire/display-comment-reponse/display-comment-reponse.component';
import { ListRateComponent } from '../gestion/gestionAvis/list-rate/list-rate.component';
import { AddRateComponent } from '../gestion/gestionAvis/add-rate/add-rate.component';



@NgModule({
  declarations: [
   FrontComponent,
   FooterFrontComponent,
   NavFrontComponent,
   ContentFrontComponent,
   ReservationFrontComponent,
   DealsFrontComponent,
   AboutFrontComponent,
   AddcommentComponent,
   AddreponseComponent,
   DisplayCommentReponseComponent,
   ListRateComponent,
  AddRateComponent
  
  
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatToolbarModule ,
    MatProgressBarModule  ,
    NgbModule
  ]
})
export class FrontModule { }

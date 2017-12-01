import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule, MatCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PlansComponent } from './components/plans/plans.component';
import { FinanceComponent } from './components/finance/finance.component';
import { HeaderComponent } from './components/header/header.component';

import { FinanceService } from './services/finance.service';
import { PlansService } from './services/plans.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlansComponent,
    FinanceComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,

    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [
    FinanceService,
    PlansService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

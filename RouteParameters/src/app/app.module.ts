import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NextComponent } from './next/next.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ThirdComponent } from './third/third.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserData } from './user-data.service';
import { HttpClientModule } from '@angular/common/http';
import { GetUserComponent } from './get-user/get-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NextComponent,
    PageNotFoundComponent,
    ThirdComponent,
    GetUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, InMemoryWebApiModule.forRoot(UserData), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NextComponent } from './next/next.component';
import { ThirdComponent } from './third/third.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditNextComponent } from './edit-next/edit-next.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NextComponent,
    ThirdComponent,
    PageNotFoundComponent,
    EditNextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

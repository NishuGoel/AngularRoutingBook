import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NextComponent } from './next/next.component';
import { ThirdComponent } from './third/third.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditNextComponent } from './edit-next/edit-next.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'home', component: HomeComponent},
    {path: 'next', component: NextComponent, 
    children: [
      {path: '', redirectTo: 'third', pathMatch: 'full'},
      {path: 'third', component: ThirdComponent, canDeactivate:[AuthGuard]},
      {path: 'info', component: EditNextComponent}

    ]},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }

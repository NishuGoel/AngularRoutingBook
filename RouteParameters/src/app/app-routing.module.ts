import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NextComponent } from './next/next.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ThirdComponent } from './third/third.component';
import { GetUserComponent } from './get-user/get-user.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'next', component: NextComponent},
  {path: 'next/:id', component: GetUserComponent},
  {path: 'third', component: ThirdComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

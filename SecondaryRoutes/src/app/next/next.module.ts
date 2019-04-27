import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NextComponent } from './next.component';

@NgModule({
  declarations: [NextComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([

        {path: 'next', component: NextComponent, outlet: 'popup'}
    ])]
})
export class NextModule { }


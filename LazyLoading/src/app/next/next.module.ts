import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThirdComponent } from '../third/third.component';
import { EditNextComponent } from '../edit-next/edit-next.component';

@NgModule({
  declarations: [ThirdComponent, EditNextComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {path: '', redirectTo: 'third', pathMatch: 'full'},
        {path: 'third', component: ThirdComponent},
        {path: 'info', component: EditNextComponent},
    ])]
})
export class NextModule { }


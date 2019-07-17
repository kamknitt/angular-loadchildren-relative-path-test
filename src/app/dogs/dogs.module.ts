import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: './overview#DogsOverviewModule'
      }
    ])
  ],
  declarations: []
})
export class DogsModule { }
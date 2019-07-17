import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DogsOverviewComponent } from './dogs-overview/dogs-overview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: DogsOverviewComponent, pathMatch: 'full'},
    ]),
  ],
  declarations: [DogsOverviewComponent]
})
export class DogsOverviewModule { }
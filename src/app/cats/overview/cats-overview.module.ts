import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatsOverviewComponent } from './cats-overview/cats-overview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CatsOverviewComponent, pathMatch: 'full'},
    ]),
  ],
  declarations: [CatsOverviewComponent]
})
export class CatsOverviewModule { }
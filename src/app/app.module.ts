import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'dogs',
        loadChildren: './dogs/dogs.module#DogsModule'
      },
      {
        path: 'cats',
        loadChildren: './cats/cats.module#CatsModule'
      }
    ]),
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

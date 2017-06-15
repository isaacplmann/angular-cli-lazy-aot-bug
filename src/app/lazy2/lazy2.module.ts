import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lazy2Component } from './lazy2.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      component: Lazy2Component,
      path: '',
      pathMatch: 'exact',
    }]),
  ],
  declarations: [Lazy2Component]
})
export class Lazy2Module { }

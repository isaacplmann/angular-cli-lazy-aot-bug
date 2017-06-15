import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        component: LazyComponent,
        path: '',
      }
    ])
  ],
  declarations: [LazyComponent]
})
export class LazyModule { }

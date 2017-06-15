import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        loadChildren: './lazy/lazy.module#LazyModule',
        path: 'lazy',
      },
      // Workaround #1
      // {
      //   loadChildren: './lazy2/lazy2.module#Lazy2Module',
      //   path: 'form/lazy2',
      // },
      { // Form view routes
        children: [
          {
            loadChildren: './lazy2/lazy2.module#Lazy2Module',
            path: 'lazy2',
          },
        ],
        // Workaround #2
        // component: ContainerComponent,
        path: 'form',
      },
      {
        component: EmptyComponent,
        path: '**',
      },
    ], {
      enableTracing: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

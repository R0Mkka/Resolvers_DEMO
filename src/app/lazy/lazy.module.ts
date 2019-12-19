import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';

import { LazyRoutingModule } from './lazy-routing.module';

import { LazyComponent } from './lazy.component';

@NgModule({
  imports: [
    MatIconModule,
    LazyRoutingModule,
  ],
  declarations: [
    LazyComponent,
  ],
  exports: [],
})
export class LazyModule {}

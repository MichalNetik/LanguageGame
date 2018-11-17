import { AppRoutingModule } from '../../app-routing.module';
import { NgModule } from '@angular/core';
import { LeftMenuComponent } from './left-menu.component';

@NgModule({
  declarations: [LeftMenuComponent],
  imports: [
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    LeftMenuComponent
  ]
})
export class LeftMenuModule {}

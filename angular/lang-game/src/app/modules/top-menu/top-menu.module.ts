import { AppRoutingModule } from '../../app-routing.module';
import { NgModule } from '@angular/core';
import { TopMenuComponent } from './top-menu.component';

@NgModule({
  declarations: [TopMenuComponent],
  imports: [
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    TopMenuComponent
  ]
})
export class TopMenuModule {}

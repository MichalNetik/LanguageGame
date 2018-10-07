import { AppRoutingModule } from '../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu.component';

@NgModule({
  declarations: [TopMenuComponent],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    AppRoutingModule,
    TopMenuComponent
  ]
})
export class TopMenuModule {}

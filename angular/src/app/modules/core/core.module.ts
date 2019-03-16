import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { AppRoutingModule } from 'app/app-routing.module';


@NgModule({
  declarations: [
    LeftMenuComponent,
    TopMenuComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [LeftMenuComponent, TopMenuComponent]
})
export class CoreModule { }


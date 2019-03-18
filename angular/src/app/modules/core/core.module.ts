import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { CoreService } from './core.service';


@NgModule({
  declarations: [
    LeftMenuComponent,
    TopMenuComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [LeftMenuComponent, TopMenuComponent],
  providers: [CoreService]
})
export class CoreModule { }


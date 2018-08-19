import { AppRoutingModule } from '../../app-routing.module';
import { NgModule } from '@angular/core';
import { TopMenuComponent } from './top-menu.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';

@NgModule({
  declarations: [TopMenuComponent, AuthenticationComponent, LoginComponent, SignupComponent],
  imports: [
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    TopMenuComponent
  ]
})
export class TopMenuModule {}

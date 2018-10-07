import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromAuth from '../store/auth.reducers';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private authStore: Store<fromAuth.State>
  ) { }

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    this.authStore.dispatch(new AuthActions.TrySignup(this.signUpForm.value));
  }

  createForm() {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}

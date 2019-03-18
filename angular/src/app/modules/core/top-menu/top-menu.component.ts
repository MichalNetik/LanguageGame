import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from '../../auth/store/auth.actions';

import { Component, OnInit, Input } from '@angular/core';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  @Input() appName: string;
  authState: Observable<fromAuth.State>;

  constructor(
    private authStore: Store<fromAuth.FeatureState>,
    private coreService: CoreService
  ) { }

  ngOnInit() {
    this.authState = this.authStore.select('auth');

    this.retrieveCredentials();
  }

  onLogout() {
    this.authStore.dispatch(new AuthActions.Logout());
  }

  retrieveCredentials() {
    // try to load token from local storage
    // TODO: create a better system for loading values from local storage
    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('userName');
    if (token && userName) {
      this.authStore.dispatch(new AuthActions.SetToken(token));
      this.authStore.dispatch(new AuthActions.SetUserName(userName));
      this.authStore.dispatch(new AuthActions.Login());
    }
  }

  onExpandIconClick() {
    this.coreService.toggleLeftPanel();
  }

}

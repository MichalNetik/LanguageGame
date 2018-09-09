import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromAuth from '../auth/store/auth.reducers';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(private authStore: Store<fromAuth.FeatureState>) { }

  ngOnInit() {
    this.authState = this.authStore.select('auth')
  }

}

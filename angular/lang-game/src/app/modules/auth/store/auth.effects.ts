import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Router} from '@angular/router';
import {map, tap, switchMap, mergeMap, mapTo} from 'rxjs/operators';
import { from } from 'rxjs';

import * as AuthActions from './auth.actions';
import { AuthHttpService } from '../../../shared/services/auth-http.service';

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup = this.actions$
    .ofType(AuthActions.TRY_SIGNUP)
    .pipe(
      map((action: AuthActions.TrySignup) => {
        return action.payload;
      }),
      switchMap((authData: { username: string, password: string }) => {
        return this.authHttpService.signUp(authData.username, authData.password);
      }),
      mapTo((authData: {username: string, password: string}) => {
        return {
            type: AuthActions.TRY_LOGIN,
            payload: authData
          };
      }));

  @Effect()
  authLogin = this.actions$
    .ofType(AuthActions.TRY_LOGIN)
    .pipe(
      switchMap(
        (action: AuthActions.TryLogin) => {
          return this.authHttpService.login(
            action.payload.username,
            action.payload.password);
        }
      ),
      mergeMap((authData: {username: string, token: string}) => {
        this.router.navigate(['/']);
        return [
          {
            type: AuthActions.LOGIN
          },
          {
            type: AuthActions.SET_TOKEN,
            payload: authData.token
          },
          {
            type: AuthActions.SET_USER_NAME,
            payload: authData.username
          }
        ];
      }));

  @Effect({dispatch: false})
  authLogout = this.actions$
    .ofType(AuthActions.LOGOUT)
    .pipe(
      tap(() => {
        this.router.navigate(['/']);
      })
    );

  constructor(
    private actions$: Actions,
    private router: Router,
    private authHttpService: AuthHttpService
  ) {}
}

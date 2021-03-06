import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';
import {map, switchMap, mergeMap, tap } from 'rxjs/operators';

import * as AuthActions from './auth.actions';
import { AuthHttpService } from '../../../shared/services/auth-http.service';

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup = this.actions$
    .pipe(
      ofType(AuthActions.TRY_SIGNUP),
      map((action: AuthActions.TrySignup) => {
        return action.payload;
      }),
      switchMap((authData: { username: string, password: string }) => {
        return this.authHttpService.signUp(authData.username, authData.password);
      }),
      map((authData: {username: string, password: string}) => {
        return {
            type: AuthActions.TRY_LOGIN,
            payload: authData
          };
      }));

  @Effect()
  authLogin = this.actions$
    .pipe(
      ofType(AuthActions.TRY_LOGIN),
      switchMap(
        (action: AuthActions.TryLogin) => {
          return this.authHttpService.login(
            action.payload.username,
            action.payload.password);
        }
      ),
      mergeMap((authData: {username: string, token: string}) => {
        this.router.navigate(['/']);

        // TODO: this will be possible to do better,
        // investigate how to properly sync store with localStorage
        localStorage.setItem('token', authData.token);
        localStorage.setItem('userName', authData.username);

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
    .pipe(
      ofType(AuthActions.LOGOUT),
      tap(() => {
        this.router.navigate(['/']);

        // TODO: this will be possible to do better,
        // investigate how to properly sync store with localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
      })
    );

  constructor(
    private actions$: Actions,
    private router: Router,
    private authHttpService: AuthHttpService
  ) {}
}

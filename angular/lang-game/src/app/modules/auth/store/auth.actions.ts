import { Action } from '@ngrx/store';

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const TRY_LOGIN = 'TRY_LOGIN';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_USER_NAME = 'SET_USER_NAME';

export class TrySignup implements Action {
  readonly type = TRY_SIGNUP;

  constructor(public payload: {username: string, password: string}) {}
}

export class TryLogin implements Action {
  readonly type = TRY_LOGIN;

  constructor(public payload: {username: string, password: string}) {}
}

export class Login implements Action {
  readonly type = LOGIN;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: string) {}
}

export class SetUserName implements Action {
  readonly type = SET_USER_NAME;

  constructor(public payload: string) {}
}

export type AuthActions = Login |
  Logout |
  SetToken |
  TrySignup |
  TryLogin |
  SetUserName;

import * as AuthActions from './auth.actions';

export interface FeatureState {
  auth: State
}

export interface State {
  token: string;
  authenticated: boolean;
  userName: string
}

const initialState: State = {
  token: null,
  authenticated: false,
  userName: null
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case (AuthActions.LOGIN):
      return {
        ...state,
        authenticated: true
      };
    case (AuthActions.LOGOUT):
      return {
        ...state,
        token: null,
        authenticated: false
      };
    case (AuthActions.SET_TOKEN):
      return {
        ...state,
        token: action.payload
      };
    case (AuthActions.SET_USER_NAME):
      return {
        ...state,
        userName: action.payload
      }
    default:
      return state;
  }
}

import { CHANGE_AUTH } from './actionTypes';

export const authenticate = (isLoggedIn) => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
};

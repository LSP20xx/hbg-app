import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectUserState = (state: RootState) => state.user;

export const selectIsAuthenticated = createSelector(
  selectUserState,
  (userState) => userState.isAuthenticated,
);

export const selectUserDetails = createSelector(
  selectUserState,
  (userState) => userState.userDetails,
);

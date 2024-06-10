import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectUserState = (state: RootState) => state.user;

export const selectAuthenticated = createSelector(
  selectUserState,
  (userState) => userState.authenticated,
);

export const selectUserDetails = createSelector(
  selectUserState,
  (userState) => userState.userData,
);

export const selectIsInstitutional = createSelector(
  selectUserState,
  (userState) => userState.userData?.isInstitutional,
);


export const selectInstitutionName = createSelector(
  selectUserState,
  (userState) => userState.userData?.institutionName,
);

export const selectUserId = createSelector(
  selectUserState,
  (userState) => userState.userData?.userId,
);

export const selectFrontImageLoading = createSelector(
  selectUserState,
  (userState) => userState.imageFrontLoading,
);

export const selectBackImageLoading = createSelector(
  selectUserState,
  (userState) => userState.imageBackLoading,
);

export const selectFrontImageSuccess = createSelector(
  selectUserState,
  (userState) => !!userState.imageFrontSuccess,
);

export const selectBackImageSuccess = createSelector(
  selectUserState,
  (userState) => !!userState.imageBackSuccess,
);

export const selectFrontImageError = createSelector(
  selectUserState,
  (userState) => !!userState.imageFrontError,
);

export const selectBackImageError = createSelector(
  selectUserState,
  (userState) => !!userState.imageBackError,
);

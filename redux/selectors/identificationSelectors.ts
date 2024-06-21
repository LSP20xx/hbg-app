import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectIdentificationState = (state: RootState) => state.identification;

export const selectIdentificationLoading = createSelector(
  selectIdentificationState,
  (identificationState) => identificationState.loading
);

export const selectIdentificationError = createSelector(
  selectIdentificationState,
  (identificationState) => identificationState.error
);

export const selectIdentificationName = createSelector(
  selectIdentificationState,
  (identificationState) => identificationState.data?.name
);

export const selectIdentificationSurname = createSelector(
  selectIdentificationState,
  (identificationState) => identificationState.data?.surname
);

export const selectIdentificationIdNumber = createSelector(
  selectIdentificationState,
  (identificationState) => identificationState.data?.idNumber
);

export const selectIdentificationNationality = createSelector(
  selectIdentificationState,
  (identificationState) => identificationState.data?.nationality
);

export const selectIdentificationDateOfBirth = createSelector(
  selectIdentificationState,
  (identificationState) => identificationState.data?.dateOfBirth
);

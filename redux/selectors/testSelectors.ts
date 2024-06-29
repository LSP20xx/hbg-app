import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectTestState = (state: RootState) => state.tests;

export const selectTests = createSelector(
  selectTestState,
  (testState) => testState.tests,
);

export const selectLoading = createSelector(
  selectTestState,
  (testState) => testState.loading,
);

export const selectError = createSelector(
  selectTestState,
  (testState) => testState.error,
);

export const selectTestById = (testId: string) =>
  createSelector(selectTests, (tests) =>
    tests.find((test) => test._id === testId),
  );

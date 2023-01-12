import {createSelector} from '@reduxjs/toolkit';
import get from 'lodash.get';

const authSelector = (state: DReduxState) => state.auth;

export const getUserData = createSelector(authSelector, data =>
  get(data, 'data', {}),
);

export const getUserEmail = createSelector(getUserData, data =>
  get(data, 'email', ''),
);

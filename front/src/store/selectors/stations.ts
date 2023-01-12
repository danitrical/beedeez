import {createSelector} from '@reduxjs/toolkit';
import get from 'lodash.get';

const stationSelector = (state: DReduxState) => state.station;

export const getStationsData = createSelector(stationSelector, data =>
  get(data, 'data', []),
);

export const getSearchStationsData = createSelector(stationSelector, data =>
  get(data, 'searchData', []),
);

export const getManualBikeStations = createSelector(getStationsData, data =>
  data.filter((station: any) => station?.types?.mechanical !== 0),
);

export const getAutomaticBikeStations = createSelector(getStationsData, data =>
  data.filter((station: any) => station?.types?.ebike !== 0),
);

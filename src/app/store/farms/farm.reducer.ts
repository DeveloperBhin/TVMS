import { createReducer, on } from '@ngrx/store';
import { initialFarmState } from './farm.state';
import * as FarmActions from './farm.actions';

export const farmReducer = createReducer(
  initialFarmState,
  on(FarmActions.loadFarms, state => ({ ...state, loading: true, error: null })),
  on(FarmActions.loadFarmsSuccess, (state, { farms }) => ({ ...state, farms, loading: false })),
  on(FarmActions.loadFarmsFailure, (state, { error }) => ({ ...state, error, loading: false }))
);

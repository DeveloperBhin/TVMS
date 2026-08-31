import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FarmState } from './farm.state';

export const selectFarmState = createFeatureSelector<FarmState>('farms');
export const selectAllFarms = createSelector(selectFarmState, state => state.farms);
export const selectFarmLoading = createSelector(selectFarmState, state => state.loading);

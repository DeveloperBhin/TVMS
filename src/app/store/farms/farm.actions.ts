import { createAction, props } from '@ngrx/store';
import { Farm } from './farm.model';

export const loadFarms = createAction('[Farm] Load Farms');
export const loadFarmsSuccess = createAction('[Farm] Load Farms Success', props<{ farms: Farm[] }>());
export const loadFarmsFailure = createAction('[Farm] Load Farms Failure', props<{ error: string }>());

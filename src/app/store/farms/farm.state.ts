import { Farm } from './farm.model';

export interface FarmState {
  farms: Farm[];
  selectedFarm: Farm | null;
  loading: boolean;
  error: string | null;
}

export const initialFarmState: FarmState = {
  farms: [],
  selectedFarm: null,
  loading: false,
  error: null
};

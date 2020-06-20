import { ActionReducerMap } from '@ngrx/store';
import * as Store from './state';

export interface AppState {
  artists: Store.ArtistsState;
}

export const initialState: AppState = {
  artists: Store.initialArtistsState
};

export const reducers: ActionReducerMap<AppState> = {
  artists: Store.artistReducer
};

export const effects: Array<any> = [
  Store.ArtistsEffect
];

export const getMyArtists = (s: AppState) => s;

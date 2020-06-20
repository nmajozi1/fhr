import {
  FETCH_PROJECTS,
  FETCH_PROJECTS_COMPLETE,
  FETCH_ARTISTS,
  FETCH_ARTISTS_COMPLETE,
  ADD_ARTISTS,
  ADD_ARTISTS_COMPLETE,
} from '../actions/artists.action';
import * as programActions from '../actions/artists.action';

export function artistReducer(state: any, action: programActions.UserAction): any {
  switch (action.type) {
    case FETCH_PROJECTS: {
      console.log('REDUCER: ', FETCH_PROJECTS);
      return { };
    }
    case FETCH_PROJECTS_COMPLETE: {
      console.log('REDUCER: ', FETCH_PROJECTS_COMPLETE);
      return {
        ...state,
        projects: action.payload
      };
    }
    case FETCH_ARTISTS: {
      console.log('REDUCER: ', FETCH_ARTISTS);
      return {
        ...state
      };
    }
    case FETCH_ARTISTS_COMPLETE: {
      console.log('REDUCER: ', FETCH_ARTISTS_COMPLETE);
      return {
        ...state,
        artistsDetails: action.payload
      };
    }
    case ADD_ARTISTS: {
      console.log('REDUCER: ', ADD_ARTISTS);
      return { };
    }
    case ADD_ARTISTS_COMPLETE: {
      console.log('REDUCER: ', ADD_ARTISTS_COMPLETE);
      return {
        ...state,
        artistsDetailsAdded: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}



import { Action } from '@ngrx/store';

export const FETCH_PROJECTS = 'Fetch projects';
export const FETCH_PROJECTS_COMPLETE = 'Fetch projects Complete';
export const FETCH_ARTISTS = 'Fetch artists';
export const FETCH_ARTISTS_COMPLETE = 'Fetch artists Complete';
export const ADD_ARTISTS = 'Add Srtists';
export const ADD_ARTISTS_COMPLETE = 'Add Artists Complete';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FETCH PROJECTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export class FetchProjects implements Action {

  readonly type: string = FETCH_PROJECTS;

  constructor(public payload: any) {
    console.log('ACTION ', FETCH_PROJECTS);
  }

}

// Fetch projects Complete Data
export class FetchProjectsComplete implements Action {

  readonly type: string = FETCH_PROJECTS_COMPLETE;

  constructor(public payload: any) {
    console.log('ACTION ', FETCH_PROJECTS_COMPLETE);
  }

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FETCH ARTISTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export class FetchArtists implements Action {

  readonly type: string = FETCH_ARTISTS;

  constructor(public payload: any) {
    console.log('ACTION ', FETCH_ARTISTS);
  }

}

// Fetch artists Complete Data
export class FetchArtistsComplete implements Action {

  readonly type: string = FETCH_ARTISTS_COMPLETE;

  constructor(public payload: any) {
    console.log('ACTION ', FETCH_ARTISTS_COMPLETE);
  }

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ADD ARTISTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export class AddArtists implements Action {

  readonly type: string = ADD_ARTISTS;

  constructor(public payload: any) {
    console.log('ACTION ', ADD_ARTISTS);
  }

}

// Add artists complete
export class AddArtistsComplete implements Action {

  readonly type: string = ADD_ARTISTS_COMPLETE;

  constructor(public payload: any) {
    console.log('ACTION ', ADD_ARTISTS_COMPLETE);
  }

}


export type UserAction = FetchArtists | FetchArtistsComplete | AddArtists | AddArtistsComplete;

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  FETCH_PROJECTS,
  FetchProjectsComplete,
  FETCH_ARTISTS,
  FETCH_ARTISTS_COMPLETE,
  FetchArtists,
  FetchArtistsComplete,
  ADD_ARTISTS,
  AddArtists,
  ADD_ARTISTS_COMPLETE,
  AddArtistsComplete,
  FetchProjects,
  FETCH_PROJECTS_COMPLETE,
} from '../actions/artists.action';
import { switchMap, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ArtistService } from 'src/app/artist.service';

@Injectable()
export class ArtistsEffect {

  constructor(
    private action$: Actions,
    private router: Router,
    private artistService: ArtistService
    ) {}

  @Effect()
  public initiateFetchProjects = this.action$.pipe(
    ofType(FETCH_PROJECTS),
      switchMap((action: FetchProjects) => this.artistService.getProjects().pipe(
        map(artistData => new FetchProjectsComplete(artistData))
      )
    )
  );

  @Effect({ dispatch: false })
  fetchProjectSuccess$ = this.action$.pipe(
    ofType(FETCH_PROJECTS_COMPLETE),
    tap(() => { console.log('Fetch projects complete'); }),
  );

  @Effect()
  public initiateFetchArtists = this.action$.pipe(
    ofType(FETCH_ARTISTS),
      switchMap((action: FetchArtists) => this.artistService.getArtists().pipe(
        map(artistData => new FetchArtistsComplete(artistData))
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.action$.pipe(
    ofType(FETCH_ARTISTS_COMPLETE),
    tap(() => { console.log('Fetch artists complete'); }),
  );

}

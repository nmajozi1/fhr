import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';
import { Store } from '@ngrx/store';
import { AppState, getMyArtists } from '../app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss']
})
export class ThumbnailsComponent implements OnInit {

  projects$: Observable<any>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.projects$ = this.store.select(getMyArtists);
    this.getArtists();
  }

  getArtists() {
    this.projects$.subscribe(res => {
      console.log('RES FROM STORE: ', res);
    });
  }

}

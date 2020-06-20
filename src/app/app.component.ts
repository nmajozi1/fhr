import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { FetchArtists, FetchProjects } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'full-house';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // this.store.dispatch(new FetchArtists(null));
    this.store.dispatch(new FetchProjects(null));
  }
}

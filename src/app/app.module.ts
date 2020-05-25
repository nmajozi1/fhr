import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { BodyComponent } from './body/body.component';
import { ReleasesComponent } from './releases/releases.component';
import { ArtistsComponent } from './artists/artists.component';
import { NewsComponent } from './news/news.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ArtistComponent } from './artist/artist.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    ThumbnailsComponent,
    BodyComponent,
    ReleasesComponent,
    ArtistsComponent,
    NewsComponent,
    ContactsComponent,
    ArtistComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReleasesComponent } from './releases/releases.component';
import { ArtistsComponent } from './artists/artists.component';
import { NewsComponent } from './news/news.component';
import { ContactsComponent } from './contacts/contacts.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: ReleasesComponent },
  { path: 'releases', component: ReleasesComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

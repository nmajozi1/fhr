import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  awsArtists: 'https://hranoqj5sb.execute-api.eu-west-1.amazonaws.com/dev/artists/get';
  local = 'http://localhost:3000/dev/artists/get';
  awsProjects = 'https://hranoqj5sb.execute-api.eu-west-1.amazonaws.com/dev/projects/get';

  constructor(private http: HttpClient) { }

  public getArtists(): Observable<any> {
    return this.http.get<any>(this.awsArtists).pipe(retry(1), catchError(this.handleError));
  }

  public getProjects(): Observable<any> {
    return this.http.get<any>(this.awsProjects).pipe(retry(1), catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      console.log('THE ERROR: ', error);
      errorMessage = `Error Code: ${error.status}\nMessages: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }


  getQuery( query: string){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB-rwxjkkm8UN1Z3bYlH_fxnzrocJvAuzIISy6fhLVgcTb8EvzqIOoZZFKUnrKESJsqZQvWby9Y98YpV5c'
    });
    console.log(url);
    
    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data => data['albums'].items ));
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQCdnQ2HlxTsfhMQbfmYcFNAdQiOHJibyt36kSuiWsflnVPvB_DlBkGwfVgFhzS1pxUki8KAt-Vw_h9b0bA'
    // });
      
    // // Si entre new-release y ' ponemos ?limit=5, nos traera un limite de 5 o el numero que pongamos
    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers} )
    //           .pipe( map( data => data['albums'].items ));
    //             //['albums] Si no se pone asi da error porque albums no es una propiedad que venga por defecto en una propiedad HTTP
    //             // Enmarcarlo entre [''] significa que en la data busque una propiedad llamada albums
  }

  getArtistas(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
              .pipe( map( data => data['artists'].items ));
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQCdnQ2HlxTsfhMQbfmYcFNAdQiOHJibyt36kSuiWsflnVPvB_DlBkGwfVgFhzS1pxUki8KAt-Vw_h9b0bA'
    // });
    // // Si entre new-release y ' ponemos ?limit=5, nos traera un limite de 5 o el numero que pongamos
    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers} )
    //           .pipe( map( data => data['artists'].items ));
  }

  getArtista(id: string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
              .pipe( map( data => data['tracks'] ));
  }
}


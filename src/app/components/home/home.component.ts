import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  // paises: any[] = [];
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError;

  constructor( 
    // private http: HttpClient
    private spotify: SpotifyService
    ) {
    // console.log('Constructor del home hecho');
    // this.http.get('https://restcountries.eu/rest/v2/lang/es')
    //   .subscribe( (data: any)  => {
    //     this.paises = data;
    //     console.log(data);
    //   });
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases()
        .subscribe( (data: any) => {
          this.nuevasCanciones = data;
          this.loading = false;
        }, ( errorServicio ) => {
          this.loading = false;
          this.error = true;
          this.mensajeError = errorServicio.error.error.message;
        });

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private _activatedRoute: ActivatedRoute,
              private _spotifyService: SpotifyService) {
    this.loading = true;
    this._activatedRoute.params.subscribe( params => {
      this.getArtista( params['id']);
      this.getTopTracks( params['id']);
    } );
   }


   getArtista(id: string){
     this._spotifyService.getArtista( id )
         .subscribe( artista => {
           this.artista = artista;
           this.loading = false;
         });
   }

   getTopTracks(id: string){
     this._spotifyService.getTopTracks( id )
         .subscribe( tracks => {
           console.log('Top Tracks');
           console.log(tracks);
           this.topTracks = tracks;
         } );
   }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';



@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent  {

  artista: any = {};
  topTracks : any = {};
  loading: boolean;


  constructor(private recogeParametros: ActivatedRoute,
              private spotify: SpotifyService) {

    this.recogeParametros.params.subscribe(parametros => {
      this.getArtista(parametros['id']);
      this.getTopTracks(parametros['id']);

    });
  }

  getArtista ( id ) {
    this.loading = true;
    this.spotify.getArtista(id)
      .subscribe( artistaInfo => {
        /*console.log(artistaInfo);*/
        this.artista = artistaInfo;
        this.loading = false;
      });
  }

  getTopTracks( id ) {
    this.spotify.getTopTracks(id)
      .subscribe( tracksInfo => {
        console.log(tracksInfo);
        this.topTracks = tracksInfo;
      });
  }



}

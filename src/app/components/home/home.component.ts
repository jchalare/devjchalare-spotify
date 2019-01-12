import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

   nuevasCanciones: any[] = [];
   loaging: boolean;

  constructor(private spotify: SpotifyService) {

    this.loaging = true;
    this.spotify.getNewReleases().subscribe((nuevas: any) => {
      /*console.log(nuevas.albums.items);*/
      this.nuevasCanciones = nuevas;
      this.loaging= false;
    });
  }



}

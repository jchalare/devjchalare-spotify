import { Component, OnInit, Input } from '@angular/core';
import {Route, Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() items: any[] = [];

  constructor(private route: Router) { }

  getArtista(item: any) {
    let artistaId;

   if ( item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.route.navigate(['/artist', artistaId]);

  }


}

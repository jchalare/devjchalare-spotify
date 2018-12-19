import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {   }
  
  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAyE8fiXf20DTywhdGZhxMTTGhOcKSwd46_LBathMa1rSSkMNAxZuQ2W7D6O3CeBNUCxDHMuNCYVCUoZe0'
    })
    
   this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
           .subscribe(nuevas => {
             console.log(nuevas);
           });
      
  }



}

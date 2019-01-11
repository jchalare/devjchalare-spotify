import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http: HttpClient) {   }


  getQuery(query: any) {
    const URL = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB9jTBUm_cxNFUqwV5yHIsWyXRWmy6KNvWSROeexGyUebaC_pjO06CGZwd2DoIEo_HfZkhLnzGJmH_u7OQ'
    });


    return this.http.get(URL, {headers});
  }

  getNewReleases() {
    /*const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBdDUomQb-FFvEImJFnQAWvAjnFOA9QiQu1psvYQMo72jMjf8sQ8BQcEqy2Y3NTrjkxwFx_vnW6CIoUeew'
    });
  this.http.post('https://accounts.spotify.com/api/token',
  {'grant_type': 'client_credentials', 'client_id': '8c321051e0c5474099ff123905f8ac78',
   'client_secret': '4901ac5aeba74d0ba16560c37e662dea'} ).subscribe(token => {
        console.log(token);
        const headers = new HttpHeaders({'Authorization': 'Bearer' + token });
   });
   this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
           .subscribe(nuevas => {
             console.log(nuevas);
           });*/


    /*return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });*/

    /*
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .pipe( map( data =>  data['albums'].items ));*/


    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( data =>  data['albums'].items ));


  }

  /************ NOTA *****************
   * Hacer esto : data =>  data['albums'].items )
   * Es o mismo que hacer esto : data => {
        return data['artists'].items;
      }
   Siempre y cuando sea solo una linea y esa linea sea la linea del return
   */

  getArtista(termino: string) {

    /*const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBdDUomQb-FFvEImJFnQAWvAjnFOA9QiQu1psvYQMo72jMjf8sQ8BQcEqy2Y3NTrjkxwFx_vnW6CIoUeew'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
      .pipe( map( data => {
        return data['artists'].items;
      }));*/

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe( map( data =>  data['artists'].items ));


  }






}

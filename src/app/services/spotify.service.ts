import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  constructor(public http: HttpClient) {}

  artistas: any[] = [];

  private urlSpotify:string='https://api.spotify.com/v1'
  private token:string ='BQAFcoJKBEVySiEvPOVWo4W-gLgflivTCsXiwLYUKSHndMtvKCprK6bUgQm2mcjoKM4rozXvdGZrvVlWmp5TwZyh-OeKb2mN3xqNLxYfkHwq2RvLOd7Ba-lbeFY7BC7p5nY9oj_fY0vAj4mbhj0q-7buIueA40I';
  private headers = new HttpHeaders({'authorization': `Bearer ${this.token}`})

  getArtistas(terminoBuscar:string){
    let url = `${this.urlSpotify}/search?query=${terminoBuscar}&type=artist&market=CO&offset=0&limit=20`;
    return  this.http.get(url, {headers: this.headers}).map( (res: any) => {
      this.artistas = res.artists.items
      return this.artistas
    })
  }

  getArtist(id:string){
    let url = `${this.urlSpotify}/artists/${id}`;
    return  this.http.get(url, {headers: this.headers}).map( (res: any) => {
      return res
    })
  }

  getTop(id:string){
    let url = `${this.urlSpotify}/artists/${id}/top-tracks?country=US`;
    return  this.http.get(url, {headers: this.headers}).map( (res: any) => {
      return res.tracks
    })
  }

}

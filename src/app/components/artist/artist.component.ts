import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  artista: any = {};
  topTracks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              public _spotify: SpotifyService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(parametros=>{

      let id = parametros['id'];
      this._spotify.getArtist(id).subscribe(art=>{
        console.log(art)
        this.artista=art;
      });
      this._spotify.getTop(id).subscribe(pistas=>{
        console.log(pistas)
        this.topTracks=pistas;
      });

    })
  }
}

import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../interfaces';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {

    albums ?: Album[];

    constructor(private albumService: AlbumsService) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(res => {
	    this.albums = res;
    });
  }

}

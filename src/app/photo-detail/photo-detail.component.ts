import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Photo } from '../interfaces';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {
  id?: number;
  photos?: Photo[];

  constructor(
    private route:ActivatedRoute,
    private albumService: AlbumsService
    ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getPhotosByAlbumId(String(this.id)).subscribe(res => {
      this.photos = res;
    });
  }



}

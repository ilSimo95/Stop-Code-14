import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album, Photo } from './interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  BASE_URL_1: string = "https://jsonplaceholder.typicode.com/albums";
  BASE_URL_2: string = "https://jsonplaceholder.typicode.com/photos?albumId=";

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
	  return this.http.get<Album[]>(this.BASE_URL_1);
  }
  
  getPhotosByAlbumId(id: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.BASE_URL_2+id);
  }


}

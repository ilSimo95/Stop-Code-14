import { Component, Input } from '@angular/core';
import { Photo } from '../interfaces';

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.css']
})
export class SinglePhotoComponent {
  @Input()
  photo?:Photo;

  
}

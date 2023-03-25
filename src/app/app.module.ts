import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumListComponent } from './album-detail/album-list.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { SinglePhotoComponent } from './single-photo/single-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AlbumsListComponent,
    AlbumListComponent,
    PhotoDetailComponent,
    SinglePhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

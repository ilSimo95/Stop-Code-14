import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { HomeComponent } from './home/home.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'albums', component: AlbumsListComponent},
  {path: 'albums/:id', component: PhotoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

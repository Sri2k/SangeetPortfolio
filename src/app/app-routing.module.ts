import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { KittyGalleryComponent } from './components/kitty-gallery/kitty-gallery.component';

const routes: Routes = [
  {
    path:'',component:LandingpageComponent
  },
  {
    path:'kitty',component:KittyGalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { KittyGalleryComponent } from './components/kitty-gallery/kitty-gallery.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path:'',component:LandingpageComponent
  },
  {
    path:'contact',component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

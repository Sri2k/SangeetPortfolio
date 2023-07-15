import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { ErrorComponent } from './components/error/error.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { KittyGalleryComponent } from './components/kitty-gallery/kitty-gallery.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    ErrorComponent,
    GalleryComponent,
    KittyGalleryComponent,
    AboutMeComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

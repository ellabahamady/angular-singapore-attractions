import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { BrowseComponent } from './browse/browse.component';
import { AttractionComponent } from './attraction/attraction.component';
import { VideoComponent } from './video/video.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './layout/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BrowseComponent,
    AttractionComponent,
    VideoComponent,
    BlogComponent,
    AboutComponent,
    DetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

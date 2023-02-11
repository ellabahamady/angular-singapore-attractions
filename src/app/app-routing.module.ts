import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowseComponent } from './browse/browse.component';
import { AttractionComponent } from './attraction/attraction.component';
import { VideoComponent } from './video/video.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/browse', pathMatch: 'full'},
  { path: 'browse', component: BrowseComponent },
  { path: 'attraction', component: AttractionComponent },
  { path: 'video', component: VideoComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

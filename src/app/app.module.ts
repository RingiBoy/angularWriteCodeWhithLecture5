import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {FindSmthService} from './components/services/find-smth.service';
import {FindAllPostsOfUserService} from './components/services/find-all-posts-of-user.service';
import {FindAllCommentsOfPostService} from './components/services/find-all-comments-of-post.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FindSmthService, FindAllPostsOfUserService, FindAllCommentsOfPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

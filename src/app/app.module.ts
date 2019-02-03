import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component' ;
import {LoginService} from './login/login.service' ;
import {HttpModule} from '@angular/http' ;
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blog/blog.component' ;
import {BlogsService} from './services/blogs.service';

const routes = [
  {
    path: "blogs", component: BlogsComponent
  },
  {
    path: "blog/:id", component:BlogComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
  providers: [LoginService, BlogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

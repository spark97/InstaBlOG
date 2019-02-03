import { Component, OnInit } from '@angular/core';
import {BlogsService} from '../services/blogs.service';
import {Blog} from '../models/blog.model'; 
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  providers: []
})
export class BlogsComponent implements OnInit {

  constructor(private blogsService : BlogsService) { }

  private blogs : Blog[];
  
  ngOnInit() {
    this.blogs = this.blogsService.getBlogs();
  }



}

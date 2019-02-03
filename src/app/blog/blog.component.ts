import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Blog} from '../models/blog.model';
import {BlogsService} from '../services/blogs.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private route : ActivatedRoute, private blogsService : BlogsService) { }

  private id : number;
  private blog: Blog;
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.blog = this.blogsService.getBlog(this.id);
  }

}

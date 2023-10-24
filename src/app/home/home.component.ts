import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service.spec';
import { Post } from '../post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  selectedPost: Post | null = null; 

  constructor(private postService: PostService) {
    this.selectedPost = null
  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  addPost(post: Post) {
    this.postService.addPost(post);
  }
}

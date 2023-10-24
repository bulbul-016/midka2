import { Component, Input } from '@angular/core';
import { Post } from '../post.model';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() post!: Post; 
}

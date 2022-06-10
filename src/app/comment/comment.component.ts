import { Component,Input, OnInit } from '@angular/core';
import { Comment } from 'src/Models/comment';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {


  @Input() comment: Comment  = {
    id:1,
    authorName:"Rapha Ondobo ",
    postedAt: "0000-00-00",
    authorPicure:"assets/dist/img/post_img/rapha1.jpg",
    content: "Le festival sera vraiment agreer ici",
    postID:1
  };

  constructor() { }

  ngOnInit(): void {
  }

}

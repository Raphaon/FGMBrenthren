import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/Models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  commentList: Comment[]=[];
  constructor() { }

  ngOnInit(): void {
    this.commentList = [
      {
        id:1,
        authorName:"Rapha Ondobo ",
        postedAt: "0000-00-00",
        authorPicure:"assets/dist/img/post_img/rapha1.jpg",
        content: "Le festival sera vraiment agreer ici",
        postID:1
      },
      {
        id:2,
        authorName:"Rapha Ondobo ",
        postedAt: "0000-00-00",
        authorPicure:"assets/dist/img/post_img/rapha1.jpg",
        content: "Felicitation papa que le Seigneur te donne davanatage de forces pour cette nouvelle responsabilité",
        postID:2
      },

    ];


  }

}

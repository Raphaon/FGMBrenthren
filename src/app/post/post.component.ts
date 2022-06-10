import { Component,Input,Output, EventEmitter, OnInit } from '@angular/core';
import { Post } from 'src/Models/post';
import { Comment } from 'src/Models/comment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post =   {
    id:1,
    title:"Mega Giga du 20 revient cette année avec davantage de couleurs ",
    like:0,
    pictureLink:'../assets/dist/img/post_img/20 mAI CONCERT SERAPHINE.jpg' ,
    postAt: '2022-10-10',
    comments:  [{
    id:1,
    authorName:"Rapha Ondobo ",
    postedAt: "0000-00-00",
    authorPicure:"assets/dist/img/post_img/rapha1.jpg",
    content: "Le festival sera vraiment chaud par  ici",
    postID:1
  }]};








  isLike: boolean = false;
  numberLike: number = 0;
  nbreLike:number =0;

  @Output() incrementEvent = new EventEmitter<Post>();

  sendNotifOfLike(){
   this.incrementEvent.emit(this.post);
  }




  likeAndDislike()
  {
    if(this.isLike) {
      this.nbreLike ++;
      this.isLike = false;

    }else{

      this.nbreLike --;
      this.isLike =true;
    }
    this.sendNotifOfLike();
  }



  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';
import { Post } from 'src/Models/post';


@Component({
  selector: 'app-like-btn',
  templateUrl: './like-btn.component.html',
  styleUrls: ['./like-btn.component.css']
})
export class LikeBtnComponent implements OnInit {

 @Input() isLike:boolean = false;
 @Input() nbreLike:number = 0;
 @Input() posted: Post =   {id:1,title:"Mega Giga du 20 revient cette année avec davantage de couleurs ",like:0,pictureLink:'../assets/dist/img/post_img/20 mAI CONCERT SERAPHINE.jpg' ,postAt: '2022-10-10',comments:  [{
  id:1,
  authorName:"Rapha Ondobo ",
  postedAt: "0000-00-00",
  authorPicure:"assets/dist/img/post_img/rapha1.jpg",
  content: "Le festival sera vraiment chaud par  ici",
  postID:1
}]
};






  likeAndDislike()
  {
    if(this.isLike) {
      this.nbreLike ++;
      this.isLike = false;
    }else{

      this.nbreLike --;
      this.isLike =true;
    }

  }




  constructor() { }

  ngOnInit(): void {
  }

}

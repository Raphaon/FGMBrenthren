import { Component, OnInit } from '@angular/core';
import { Post } from 'src/Models/post';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {

  numberLike: number = 0;
  isLike: boolean = false; 
  postList: Post[] | any;
  constructor() { }


  likeAndDislike(i:number){
    if(!this.isLike){
      this.postList[i].like ++;
       this.isLike =true;
    }else{
      this.isLike = false;
      this.postList[i].like --;
    }
    
  }

  ngOnInit(): void {
    this.postList = [
        {id:1, title:"Mega Giga du 20 revient cette année avec davantage de couleurs ", like:0,comment:0, pictureLink:'../assets/dist/img/post_img/20 mAI CONCERT SERAPHINE.jpg' , postAt: '2022-10-10'},
        {id:2, title:"Le nouveau superviseur regional dans la region du centre 1 se prepare pour le  soixantenaire  ", like:0,comment:0, pictureLink: '../assets/dist/img/post_img/RevNDEBE.jpg', postAt: '2022-06-09'}, ]
  }

}

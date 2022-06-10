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


  likeAndDislike(p :Post){
    let i = this.postList.indexOf(p);
    this.postList[i].like ++;
}

  ngOnInit(): void {
    this.postList = [
    {id:1, title:"Mega Giga du 20 revient cette année avec davantage de couleurs ",
    like:0,
    comment:0,
    pictureLink:'../assets/dist/img/post_img/20 mAI CONCERT SERAPHINE.jpg',
    postAt: '2022-10-10',
    comments:[

  {
    id:5,
    authorName:"Rapha Ondobo ",
    postedAt: "0000-00-00",
    authorPicure:"assets/dist/img/post_img/rapha1.jpg",
    content: "Je confirme ma presence oooh, je serai la nous allons louer le Seingeur ",
    postID:1
  }]},


  {id:2, title:"Le nouveau superviseur regional dans la region du centre 1 se prepare pour le  soixantenaire  ", like:0,comment:0, pictureLink: '../assets/dist/img/post_img/RevNDEBE.jpg', postAt: '2022-06-09', comments: [


    {
      id:2,
      authorName:"Rapha Ondobo ",
      postedAt: "0000-00-00",
      authorPicure:"assets/dist/img/post_img/rapha1.jpg",
      content: "Felicitation papa que le Seigneur te donne davanatage de forces pour cette nouvelle responsabilité",
      postID:2
    },

    {
      id:6,
      authorName:"Rapha Ondobo ",
      postedAt: "0000-00-00",
      authorPicure:"assets/dist/img/post_img/rapha1.jpg",
      content: "Je confirme ma presence oooh, je serai la nous allons louer le Seingeur ",
      postID:1
    }]},


]
  }

}

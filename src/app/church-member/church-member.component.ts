import { Component, OnInit } from '@angular/core';
import { Member } from 'src/Models/member';

@Component({
  selector: 'app-church-member',
  templateUrl: './church-member.component.html',
  styleUrls: ['./church-member.component.css']
})



export class ChurchMemberComponent implements OnInit {

memberList:Member[] = [];

  constructor() { }

  ngOnInit(): void {

    this.memberList = [
      {matricule:"MPE0000000",
      name: "Underfinied",
      surname:'Underfinied',
      profession:'Unknow',
      phone: "+237 695 633 802",
      address: "unknow",
      picture:"assets/dist/img/post_img/rapha1.jpg",
      description: "Lorem lorem lorem lorem lorem lorem lorem lorem"},

      {matricule:"MPE0000000",
      name: "Underfinied",
      surname:'Underfinied',
      profession:'Unknow',
      phone: "+237 695 633 802",
      address: "unknow",
      picture:"assets/dist/img/post_img/rapha1.jpg",
      description: "Lorem lorem lorem lorem lorem lorem lorem lorem"},

      {matricule:"MPE0000000",
      name: "Underfinied",
      surname:'Underfinied',
      profession:'Unknow',
      phone: "+237 695 633 802",
      address: "Nouvelle route bastos bp 11154",
      picture:"assets/dist/img/post_img/rapha1.jpg",
      description: "Lorem lorem lorem lorem lorem lorem lorem lorem"}
    ];

  }

}

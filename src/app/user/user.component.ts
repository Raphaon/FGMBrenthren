import { Component, OnInit } from '@angular/core';
import { User } from 'src/Models/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  UsersList: User[] = [];
  isAuth:boolean  = false;
  username: string ="";
  password:string="";

  login(user:string, pass:string){
    for(let u of this.UsersList ){
      if(u.username == user && u.password== pass)
        this.isAuth = true;
      else
      this.isAuth = false;
    }

  }
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (datas: User[])=> this.UsersList = datas);

  }

}

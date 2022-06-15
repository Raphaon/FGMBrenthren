import { AfterViewInit, Component, OnInit } from '@angular/core';

const mediasconstrain = {
  video : {width:200, height: 150},
  audio:true,
}



@Component({
  selector: 'app-chat-video',
  templateUrl: './chat-video.component.html',
  styleUrls: ['./chat-video.component.css']
})
export class ChatVideoComponent implements AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}

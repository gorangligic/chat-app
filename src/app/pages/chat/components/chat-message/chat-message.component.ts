import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/classes/message';


@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  @Input() message: Message;

 
  constructor() {
   }
   
  ngOnInit() {
  }

    // getTimeStamp() {
    //     const now = new Date();
    //     const date = now.getUTCFullYear() + '/' +
    //                  (now.getUTCMonth() + 1) + '/' +
    //                   now.getUTCDate();
    //     const time = now.getUTCHours() + ':' +
    //                  now.getMinutes() + ':' +
    //                  now.getSeconds();
    
    //       return (date + ' ' + time);
    //  }

}

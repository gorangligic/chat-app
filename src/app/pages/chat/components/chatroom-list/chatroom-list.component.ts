import { Component, OnInit } from '@angular/core';
import { ChatroomService } from 'src/app/services/chatroom.service';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-chatroom-list',
  templateUrl: './chatroom-list.component.html',
  styleUrls: ['./chatroom-list.component.scss']
})
export class ChatroomListComponent implements OnInit {

  constructor(public chatroomService: ChatroomService/*, public currentUser: User*/) { }

  ngOnInit() {
  }
}
//   return chatManager
//     .connect()
//     .then(currentUser => {
//       currentUser.subscribeToRoom({
//         roomId: '<your room id>',
//         messageLimit: 100,
//         hooks: {
//           onMessage: message => {
//             this.messages.push(message);
//           },
//           onPresenceChanged: (state, user) => {
//             this.users = currentUser.users.sort((a, b) => {
//               if (a.presence.state === 'online') return -1;

//               return 1;
//             });
//           },
//         },
//       });

//       this.currentUser = currentUser;
//       this.users = currentUser.users;
//     });
// }
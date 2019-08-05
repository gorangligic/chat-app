import { Component, OnInit, OnDestroy, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ChatroomService } from 'src/app/services/chatroom.service';
import { LoadingService } from 'src/app/services/loading.service';
// import { JoinRoomService } from 'src/app/services/joinroom.service';
// import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-chatroom-window',
  templateUrl: './chatroom-window.component.html',
  styleUrls: ['./chatroom-window.component.scss']
})
export class ChatroomWindowComponent implements OnInit, OnDestroy, OnDestroy, AfterViewChecked {

  @ViewChild('scrollContainer') private scrollContainer: ElementRef;

  private subscriptions: Subscription[] = [];
  public chatroom: Observable<any>;
  public messages: Observable<any>;

  //TODO replace with Firebase data

  constructor(private route: ActivatedRoute, private chatroomService: ChatroomService,
    private loadingService: LoadingService
    ) { 
   this.subscriptions.push(
     this.chatroomService.selectedChatroom.subscribe(chatroom => {
       this.chatroom = chatroom;

     })
   );

   this.subscriptions.push(
     this.chatroomService.selectedChatroomMessages.subscribe(messages => {
      this.messages = messages

     })
   );
  }

  ngOnInit() {
    this.scrollToBottom();
    this.subscriptions.push(
      this.route.paramMap.subscribe(params => {
        const chatroomId = params.get('chatroomId');
        this.chatroomService.changeChatroom.next(chatroomId);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  ngAfterViewChecked(){
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    }catch(err){}
  }
//   join(){
//     this.chatService.joinRoom({user:this.user.firstName, messages:this.messages});
// }

// leave(){
//     this.chatService.leaveRoom({user:this.user.firstName, messages:this.messages});
// }
}

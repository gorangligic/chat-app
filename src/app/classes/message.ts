import { User } from '../interfaces/user';

export class Message {
    message: string;
    sender: User;

    constructor() {
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

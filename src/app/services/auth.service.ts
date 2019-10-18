import { Injectable } from '@angular/core';
import { AlertType } from '../enums/alert-type.enum';
import { Observable, of, from as fromPromise } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { AlertService } from './alert.service';
import { Alert } from '../classes/alert';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: Observable<User | null>;
  public currentUserSnapshot: User | null;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
  ) { 
    //preuzima korisnika iz baze i postavlja ga ||
    this.currentUser = this.afAuth.authState
      .pipe(
        switchMap((user) => {
          console.log(user)
          if (user) {
            return this.db.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        })
      );

      this.currentUser.subscribe(res => console.log(res));

    this.setCurrentUserSnapshot();
  }
  //sign up
  public signup(firstName: string, lastName: string, email: string, password: string): Observable<boolean> {
    return  fromPromise(
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
          const userRef: AngularFirestoreDocument<User> = this.db.doc(`users/${user.user.uid}`);
          const updatedUser = {
            id: user.user.uid,
            email: user.user.email,
            firstName,
            lastName,
            photoUrl: 'https://firebasestorage.googleapis.com/v0/b/chat-14dab.appspot.com/o/black-and-white.jpg?alt=media&token=4fd88702-96a4-4ffa-81a2-cadd86aa70e5',
            quote: 'Life is like a box chocolates, you never know what you are gonna get!',
            bio: 'Bio is under construction...'
          }
          userRef.set(updatedUser);
          return true;
        })

        .catch((err) => false)
    );
  }


  public login(email: string, password: string): Observable<boolean> {
    //TODO call Firebase login function
    return fromPromise(
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => true)
      .catch((err) => false)
    )
  }

  public logout(): void {
    //TODO call Firebase logout function
    this.afAuth.auth.signOut().then(() =>{
      this.router.navigate(['/login']);
      this.alertService.alerts.next(new Alert('You have been signed out.'));
    })
    }

    private setCurrentUserSnapshot(): void {
      this.currentUser.subscribe(user => this.currentUserSnapshot = user);
    }
}

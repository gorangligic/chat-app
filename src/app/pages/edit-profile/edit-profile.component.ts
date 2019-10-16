import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from 'src/app/interfaces/user';
import { AlertService } from 'src/app/services/alert.service';
import { Alert } from 'src/app/classes/alert';
import { AlertType } from 'src/app/enums/alert-type.enum';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit, OnDestroy {

  public currentUser: any = null;
  public userId: string = '';
  private subscriptions: Subscription[] = [];
  public uploadPerent: number = 0;
  public downloadUrl: string | null = null;
  public downloadURL: any;

  constructor(
    private auth: AuthService,
    private loadingService: LoadingService,
    private route: ActivatedRoute,
    private fs: AngularFireStorage,
    private db: AngularFirestore,
    private location: Location,
    private alertService: AlertService
  ) {
    this.loadingService.isLoading.next(true);
   }

  ngOnInit() {
    this.subscriptions.push(
      this.auth.currentUser.subscribe( user =>{
        this.currentUser = user;
        this.loadingService.isLoading.next(false);
      })
    );

    this.subscriptions.push(
      this.route.paramMap.subscribe(params => {
        this.userId = params.get('userId');
      })
    );
  }

  //upload file
  public uploadFile(event) {
    const file = event.target.files[0];
    const filePath = `${file.name}_${this.currentUser.id}`;
    const task = this.fs.upload(filePath, file);

    //posmatrati) procenat promjene
    this.subscriptions.push(
      task.percentageChanges().subscribe(precentage => {
        if(precentage < 100) {
          this.loadingService.isLoading.next(true);
        } else {
          this.loadingService.isLoading.next(false);
        }
        this.uploadPerent = precentage;
      })
    );

    //uzima notifikacije kada je dostupan URL za skidanje
    this.subscriptions.push(
      this.downloadURL().subscribe(url => this.downloadUrl = url)
    );
  }

  public save(): void {
    let photo;

    if(this.downloadUrl) {
      photo = this.downloadUrl;
    } else {
      photo = this.currentUser.photoUrl;
    }

    const user = Object.assign({}, this.currentUser, {photoUrl: photo});
    const userRef: AngularFirestoreDocument<User> = this.db.doc(`users/${user.id}`);
    userRef.set(user);
    this.alertService.alerts.next(new Alert('Tvoj profil je uspjesno uredjen!', AlertType.Success))
    this.location.back();
  }

  ngOnDestroy(){
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}

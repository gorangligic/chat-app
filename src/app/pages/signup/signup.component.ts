import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alert } from '../../classes/alert';
import { AlertType } from 'src/app/enums/alert-type.enum';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  
  public signupForm: FormGroup;
  private subscriptions: Subscription[] = [];
  private roomInput: string;

  constructor(private fb: FormBuilder,
     private alertService: AlertService,
     private auth: AuthService,
     private loadingService: LoadingService,
     private router: Router
     ) {
  this.createForm();
   }

  ngOnInit() {
  }

  private createForm(): void {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public submit(): void {
    if(this.signupForm.valid){
      const {firstName, lastName, email, password} = this.signupForm.value;
      //poziva Auth servis
      this.subscriptions.push(
        this.auth.signup(firstName, lastName, email, password).subscribe(success => {
          if (success) {
            this.router.navigate(['/chat']); 
          } else {
            const failedSignupAlert = new Alert('Imate problem sa registracijom, pokusajte ponovo', AlertType.Danger);
            this.alertService.alerts.next(failedSignupAlert);
          }
          this.loadingService.isLoading.next(false); 
        })
      );
    } else {
      const failedSignedAlert = new Alert('Molimo vas unesite ispravno ime, email, lozinku, pokusajte ponovo', AlertType.Danger);
      this.alertService.alerts.next(failedSignedAlert);
    }
    
  }

  ngOnDestroy(){
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}

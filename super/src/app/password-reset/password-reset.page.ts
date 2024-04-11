import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {

  constructor(private authService: AuthService, private router: Router, private alertCtrl: AlertController) { }


  ngOnInit() {
  }

  async resetpassword(form): Promise<void> {
    console.log('login ok');
    this.authService.resetPassword(form.value.email).then(
      () => {
        this.router.navigateByUrl('login');
      },
      async error => {
        const alert = await this.alertCtrl.create({
          message: error.message,
          buttons: [{ text: 'Ok', role: 'cancel' }],
        });
        await alert.present();
      }
    )
  }

}

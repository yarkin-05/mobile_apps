import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authService: AuthService, private router:Router, private alertCtrl:AlertController) {}

  async logout(): Promise<void> {
    this.authService.logout().then(
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

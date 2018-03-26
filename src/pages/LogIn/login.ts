import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserAuthPage } from '../user-auth/user-auth';
import { UserRegisterPage } from '../user-register/user-register';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LogInPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  goLoginPage(): void {
    this.navCtrl.push(UserAuthPage);
  }

  goRegisterPage(): void {
    this.navCtrl.push(UserRegisterPage);
  }

}

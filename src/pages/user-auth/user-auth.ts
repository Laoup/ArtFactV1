import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SearchingPage } from '../searching/searching';

/**
 * Generated class for the UserAuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-auth',
  templateUrl: 'user-auth.html',
})
export class UserAuthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserAuthPage');
  }


  goSearchPage(): void {
    this.navCtrl.push(SearchingPage);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PartyDescriptionPage } from '../party-description/party-description';

/**
 * Generated class for the SearchingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searching',
  templateUrl: 'searching.html',
})
export class SearchingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchingPage');
  }

  goToParty(id: number) : void {
    this.navCtrl.push(PartyDescriptionPage, {id: id});
  }

}

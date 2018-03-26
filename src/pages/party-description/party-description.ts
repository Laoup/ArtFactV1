import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PartyProvider } from '../../providers/party/party';
import { PartyDefine } from '../../mocks/party_define';
import { PartyInfo } from '../../interface/party_interface';

/**
 * Generated class for the PartyDescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage({
     segment: 'PartyDescriptionPage/:id'
 })
@Component({
  selector: 'page-party-description',
  templateUrl: 'party-description.html',
})
export class PartyDescriptionPage {

  //@Input() partyRes: PartyDefine;

  id:number;

  partyRes: PartyInfo;

  constructor(public navCtrl: NavController, public navParams: NavParams, private partyProvider: PartyProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartyDescriptionPage');
    this.id = this.navParams.get('id');
    console.log('Here We Aff the ID -> ' + this.id);
    this.partyRes = this.partyProvider.getParty(this.id)//.subscribe(partyRes => this.partyRes = partyRes);
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter PartyDescriptionPage');
    /*const id = this.navParams.get('id');
    partyRes = this.partyProvider.getParty(id).subscribe(partyRes => this.partyRes = partyRes);*/
  }

}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartyDescriptionPage } from './party-description';

@NgModule({
  declarations: [
    PartyDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(PartyDescriptionPage),
  ],
})
export class PartyDescriptionPageModule {}

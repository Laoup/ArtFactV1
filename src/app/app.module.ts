import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { LogInPage } from '../pages/LogIn/login';
import { UserAuthPage } from '../pages/user-auth/user-auth';
import { UserRegisterPage } from '../pages/user-register/user-register';
import { SearchingPage } from '../pages/searching/searching';
import { PartyDescriptionPage } from '../pages/party-description/party-description';
import { PartyProvider } from '../providers/party/party';

@NgModule({
  declarations: [
    MyApp,
    LogInPage,
    UserAuthPage,
    UserRegisterPage,
    SearchingPage,
    PartyDescriptionPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LogInPage,
    UserAuthPage,
    UserRegisterPage,
    SearchingPage,
    PartyDescriptionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PartyProvider,
  ]
})
export class AppModule {}

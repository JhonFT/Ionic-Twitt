import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { NotificationPage } from '../pages/notification/notification';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { VerNotificationPage } from '../pages/notification/verNotification'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//regactor por router
var links = [
  { component: LoginPage, name: 'login', segment: 'login' },
  { component: TabsPage, name: 'tabs', segment: 'tabs' }
]


@NgModule({
  declarations: [
    MyApp,
    NotificationPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage,
    VerNotificationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, links)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    NotificationPage,
    HomePage,
    TabsPage,
    LoginPage,
    VerNotificationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Notifications } from '../../commons/notification';
import {VerNotificationPage} from './verNotification';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {
  public notifications: Array<Notifications> = [
    { action: 'reply', img: 'http://ionicframework.com/dist/preview-app/www/assets/img/thumbnail-totoro.png', nick_name: '@john', text: 'Esto es generado con ionic 2' },
    { action: 'reply', img: 'http://ionicframework.com/dist/preview-app/www/assets/img/thumbnail-batman.png', nick_name: 'Batman', text: 'Esto es generado con ionic 2' },
    { action: 'reply', img: 'http://ionicframework.com/dist/preview-app/www/assets/img/thumbnail-terminator.png', nick_name: 'The Teminatore', text: 'Esto es generado con ionic 2' }
  ]
  constructor(public navCtrl: NavController) {}

  verNotofication(_notification:Notification){
    this.navCtrl.push(VerNotificationPage,{
      id:_notification
    });
  }

}


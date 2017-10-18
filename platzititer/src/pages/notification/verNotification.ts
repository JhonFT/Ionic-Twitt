import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Notifications } from '../../commons/notification';


@Component({
    selector: 'ver-Notification',
    template: ` 
    <ion-header>
        <ion-navbar>
        <ion-title>
            Notificacion
        </ion-title>
        </ion-navbar>
    </ion-header>
    <ion-content padding>
        <ion-list>
            <ion-item>
              <ion-thumbnail item-start>
                <img [src]="notification.img" >
              </ion-thumbnail>
              <h2>{{notification.nick_name}}</h2>
              <p>{{notification.text}}</p>
            </ion-item>
          </ion-list>
    </ion-content>
    `
    })
export class VerNotificationPage {
    notification = {};
    constructor(public navPrams: NavParams) {
        this.notification = navPrams.get('id');
    }
}
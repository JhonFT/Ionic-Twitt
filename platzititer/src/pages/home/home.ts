import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { twitt } from '../../commons/twitt';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public listado:Array<twitt> = [
    {img:'http://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png',nick_name: '@john', text: "Esto es produciodo por ionic 2"},
    {img:'http://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-buzz.png',nick_name: '@juan', text: "Esto es produciodo por ionic 2"},
    {img:'http://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-jessie.png',nick_name: '@alexander', text: "Esto es produciodo por ionic 2"}
  ]
  constructor(public navCtrl: NavController) {

  }

}

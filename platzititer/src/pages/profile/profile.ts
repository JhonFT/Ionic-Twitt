import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { profile } from '../../commons/profile';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  public profile: profile = {
    img: "http://ionicframework.com/dist/preview-app/www/assets/img/nin-live.png",
    nick_name: '@johnf',
    iterations: 1,
    github: 'JhonFT',
    twitter: 'N/A',
    bio: "other leguaje ionic 2"
  }
  constructor(public navCtrl: NavController) {

  }

}



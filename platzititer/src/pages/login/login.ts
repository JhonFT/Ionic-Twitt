import { Component, OnInit } from "@angular/core";
import { AlertController, LoadingController, NavController } from "ionic-angular";
import { TabsPage } from '../tabs/tabs';
@Component({
    selector: 'page-login',
    templateUrl: './login.html'
})
export class LoginPage implements OnInit {

    public user = { email: "", password: "" };
    constructor(private alterCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public navCtrl: NavController) { }
    ngOnInit(): void {
        console.log("arranco init");
    }
    login = (): void => {
        const loading = this.loadingCtrl.create({
            content: 'please wait...'
        })
        if (this.user.email != "" && this.user.password != "") {
            loading.present();
            setTimeout(() => {
                loading.dismiss();
                this.navCtrl.push(TabsPage);
            }, 5000)
        } else {
            let alert = this.alterCtrl.create({
                title: "login",
                subTitle: "Login incorrecto",
                buttons: ["Aceptar"]
            });
            alert.present();
        }
    }
}

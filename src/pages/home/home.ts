import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from './../welcome/welcome';
import { UserService } from '../../services/user';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public user: any = {
    curp: ''
  }

  constructor(public navCtrl: NavController, public userSrv: UserService) {
    this.userSrv.curp = "";
  }

  saveCurp(): void {
    this.userSrv.curp = this.user.curp;
    this.navCtrl.push(WelcomePage);
  }
}
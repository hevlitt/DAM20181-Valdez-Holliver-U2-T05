import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/user';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  public data: any = {
    si: false
  };

  curp: String;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public UserSrv: UserService) {
    this.curp = this.UserSrv.curp;

    if (this.curp.substring(10, 11) == "H") {
      this.data.si = true;
    }
    else {
      this.data.si = false;
    }
  }

  back(): void {
    this.navCtrl.push(HomePage);
    this.UserSrv.curp="";
  }
}
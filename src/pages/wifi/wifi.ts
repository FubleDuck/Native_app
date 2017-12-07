import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';



@Component({
  selector: 'page-wifi',
  templateUrl: 'wifi.html'
})
export class WifiPage {

 

  constructor(public navCtrl: NavController, private navParams : NavParams ) {
    
  }

  private goHome(){
    this.navCtrl.push(HomePage);

}
}

import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { OfficePage } from '../office/office';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  

  constructor(public navCtrl: NavController, private navParams : NavParams) {
    
    
  }
  
  private openOffice() {
    this.navCtrl.push(OfficePage);
  }
  

  private goHome(){
    this.navCtrl.push(HomePage);

}
}

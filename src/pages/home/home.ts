import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { KoulchiPage } from '../koulchi/koulchi'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  nom : string;
  email : string;
  shPics :  Boolean = false;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,private statusBar: StatusBar) {
    this.statusBar.overlaysWebView(false);
  }
 
  
    private showAbout(){
    this.shPics = !this.shPics;
    }
  
  
    private goToKoulchi(){
    this.navCtrl.push(KoulchiPage,{
        nom : this.nom,
        email : this.email,
    });
    if (this.nom == undefined){
      let alert = this.alertCtrl.create({
        title: 'Dekhel smeytek :(',
        subTitle: "",
        buttons: [
          {
            text: 'Go Back',
            handler: () => {
              console.log('go back clicked');
              this.navCtrl.push(HomePage)
            }
          }],
      
      });
      alert.present();
    }
    
  }

}




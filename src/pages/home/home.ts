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
 
  
    showAbout(){
    this.shPics = !this.shPics;
    }
  
  
     goToKoulchi(){
      if (this.nom == undefined){
        let alert = this.alertCtrl.create({
          cssClass: 'alertCss',
          title: 'Ur name please ?? ',
          subTitle: "",
          buttons: [
            {
              text: 'Enter ur name',
              role : 'cancel',
              handler: () => {
                console.log('go back clicked');
               
              }
            }],
        
        });
        alert.present();
      }
else {
    this.navCtrl.push(KoulchiPage,{
        nom : this.nom,
        email : this.email,
    });
  }
    
  }

  public popUpHome(){
    let alert = this.alertCtrl.create({
      cssClass: 'alertCss',
      title: 'Hello !',
      subTitle: "Please enter your Name and click on " + "<strong>'Get Control'</strong>",
      buttons: [
        {
          text: 'Okay',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            
          }
        }],
    
    });
    alert.present();
  }

  public popUpMe(){
    let alert = this.alertCtrl.create({
      cssClass: 'alertCss',
      title: "Hey !",
      subTitle: "Welcome a million time :) ",
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            
          }
        }],
    
    });
    alert.present();
  }

}




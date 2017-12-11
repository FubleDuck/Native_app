import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { BluetoothPage } from '../bluetooth/bluetooth';
import { DistPage } from '../dist/dist';
import { AboutPage } from '../about/about';
import { VoicePage } from '../voice/voice';
import { WifiPage } from '../wifi/wifi';


@Component({
  selector: 'page-koulchi',
  templateUrl: 'koulchi.html'
})
export class KoulchiPage {

  nom : string;
  email : string;

  constructor(public navCtrl: NavController, public navParams : NavParams ) {
    this.nom = navParams.get('nom');
    this.email = navParams.get('email');

    console.log(this.nom);
    console.log(this.email);
  }
  goToBluetooth(){
    this.navCtrl.push(BluetoothPage,{
      nom : this.nom,
      email : this.email,
  });
}

 goToAbout(){
  this.navCtrl.push(AboutPage)
}

 goToDist(){
  this.navCtrl.push(DistPage);
}

 goTovoice(){
  this.navCtrl.push(VoicePage);
}

 goToWifi(){
  this.navCtrl.push(WifiPage);
}

 goToVoice(){
  this.navCtrl.push(VoicePage)
  
}
/*
private goToPresence(){
  this.navCtrl.push(PresencePage);
}*/

   goHome(){
    this.navCtrl.push(HomePage);

}
}

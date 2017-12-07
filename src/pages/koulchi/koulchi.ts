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

  constructor(public navCtrl: NavController, private navParams : NavParams ) {
    this.nom = navParams.get('nom');
    this.email = navParams.get('email');

    console.log(this.nom);
    console.log(this.email);
  }
  private goToBluetooth(){
    this.navCtrl.push(BluetoothPage,{
      nom : this.nom,
      email : this.email,
  });
}

private goToAbout(){
  this.navCtrl.push(AboutPage)
}

private goToDist(){
  this.navCtrl.push(DistPage);
}

private goTovoice(){
  this.navCtrl.push(VoicePage);
}

private goToWifi(){
  this.navCtrl.push(WifiPage);
}

/*private goToGyro(){
  this.navCtrl.push(GyroPage);
}

private goToPresence(){
  this.navCtrl.push(PresencePage);
}*/

  private goHome(){
    this.navCtrl.push(HomePage);

}
}

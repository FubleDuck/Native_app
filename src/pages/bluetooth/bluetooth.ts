import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { KoulchiPage } from '../koulchi/koulchi';


@Component({
  selector: 'page-bluetooth',
  templateUrl: 'bluetooth.html'
})


export class BluetoothPage {

  nom : string;
  email : string;
  sVar : string ;
unpairedDevices: any;
pairedDevices: any;
gettingDevices: Boolean;
conCheck: Boolean = false;

variablesDekhlou : Boolean = false;
avancer :string = '';
reculer : string = '';
td : string = '';
tg : string = '';



  constructor(public navCtrl: NavController,
     public navParams : NavParams,
      private bluetoothSerial: BluetoothSerial,
      private alertCtrl: AlertController,
      private toastCtrl: ToastController) {
    bluetoothSerial.enable();
   
  
    
   
    this.nom = navParams.get('nom');
    this.email = navParams.get('email');

  }


  presentToastDefaultVar() {
    let toast = this.toastCtrl.create({
      message:  "Using Default Variables",
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
  presentToastCustomeVar() {
      let toast = this.toastCtrl.create({
        message: 'Using Costume Variables',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }


  startScanning() {
    this.pairedDevices = null;
    this.unpairedDevices = null;
    this.gettingDevices = true;
    this.bluetoothSerial.discoverUnpaired().then((success) => {
      this.unpairedDevices = success;
      this.gettingDevices = false;
      success.forEach(element => {
        // alert(element.name);
      });
    },
      (err) => {
        console.log(err);
      })

    this.bluetoothSerial.list().then((success) => {
      this.pairedDevices = success;
    },
      (err) => {

      })
  }
  success = (data) => alert(data);
  fail = (error) => alert(error);

  selectDevice(address: any) {
    this.bluetoothSerial.connect(address).subscribe(this.success, this.fail);
    
  /*  let alert = this.alertCtrl.create({
      title: 'Connect',
      message: 'Do you want to connect with?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Connect',
          handler: () => {
            this.bluetoothSerial.connect(address).subscribe(this.success, this.fail);
            this.isConn();

          }
        }
      ]
    });
    alert.present();
  */
  }

  sendS(){
    this.bluetoothSerial.isConnected().then((success) => {
      this.bluetoothSerial.write("S");
   this.sVar = "S";
            })
  } 
sendAvancer(){
  this.bluetoothSerial.isConnected().then((success) => {
    this.bluetoothSerial.write(this.avancer);
 this.sVar = this.avancer;
          })
}
sendGauche(){
  this.bluetoothSerial.isConnected().then((success) => {
    this.bluetoothSerial.write(this.tg);
    this.sVar = this.tg;
          })
}
sendDroite(){
  this.bluetoothSerial.isConnected().then((success) => {
    this.bluetoothSerial.write(this.td);
    this.sVar = this.td;
          })
}
sendReculer(){
  this.bluetoothSerial.isConnected().then((success) => {
    this.bluetoothSerial.write(this.reculer);
    this.sVar = this.reculer;
          })
}
sendE(){
  this.bluetoothSerial.isConnected().then((success) => {
    this.bluetoothSerial.write("E");
    this.sVar = "E";
          })
}


isConn(){
   this.conCheck = !this.conCheck;
}









  
  disconnect() {
    let alert = this.alertCtrl.create({
      title: 'Disconnect?',
      message: 'Do you want to Disconnect?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Disconnect',
          handler: () => {
            this.bluetoothSerial.disconnect();
            
          }
        }
      ]
    });
    alert.present();
  }


  defaultVariable1(){
    this.avancer = 'A';
    this.reculer = 'B';
    this.tg = 'C';
    this.td = 'D';
    this.variablesDekhlou = true;
  }
  defaultVariable(){
    this.presentToastDefaultVar();
    this.avancer = 'A';
    this.reculer = 'B';
    this.tg = 'C';
    this.td = 'D';
    this.variablesDekhlou = true;
   
  }

  setVariable() {
    let alert = this.alertCtrl.create({
      title: 'Set Them',
      inputs: [
        {
          name: 'avancer',
          placeholder: 'Avancer'
        },
        {
          name: 'reculer',
          placeholder: 'Reculer',
          
        },
        {
          name: 'td',
          placeholder: 'Droite',
          
        },
        {
          name: 'tg',
          placeholder: 'Gauche',
          
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            this.defaultVariable1();
            this.presentToastDefaultVar();
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Set',
          handler: data => {
            if (data.avancer != '' && data.reculer != '' && data.td != '' && data.tg != '') {
              this.avancer = data.avancer;
              this.reculer = data.reculer;
              this.td = data.td;
              this.tg = data.tg;
              this.variablesDekhlou = true;
              this.presentToastCustomeVar();
            } else {
              this.variablesDekhlou = false;
              return false;
            }
          }
        }
      ]
    });
    alert.present();
}













goBack(){
    this.navCtrl.push(KoulchiPage);

}

  
}


import { Component , ChangeDetectorRef } from '@angular/core';
import { NavController,NavParams,Platform } from 'ionic-angular';

import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

import { KoulchiPage } from '../koulchi/koulchi';


@Component({
  selector: 'voice-bluetooth',
  templateUrl: 'voice.html'
})


export class VoicePage {

  nom : string;
  email : string;
  sVar : string ;
unpairedDevices: any;
pairedDevices: any;
gettingDevices: Boolean;
conCheck: Boolean = false;

matches : Array<string>  = [];



  constructor(
    public platform :Platform,
    public changeDetectorRef : ChangeDetectorRef,
    public navCtrl: NavController,
    private navParams : NavParams, 
    private bluetoothSerial: BluetoothSerial,
    private alertCtrl: AlertController,
    private speechRecognition: SpeechRecognition) {
    
    this.platform.ready().then((readySource) => {
          console.log('Platform ready from', readySource);
          // Platform now ready, execute any required native code
          bluetoothSerial.enable();
          this.speechRecognition.hasPermission().then((hasPermission: boolean) => {
            console.log(hasPermission);
            if (!hasPermission){ this.requestPermissionVoice(); }
          });
        });

    
    this.nom = navParams.get('nom');
    this.email = navParams.get('email');

  }

private requestPermissionVoice(){
  this.speechRecognition.requestPermission().then(
    () => console.log('Granted'),
    () => console.log('Denied')
  )}

listen():void {
  this.matches = [];
  let options = {
     language : 'fr-FR',
     matches : 1 ,
     prompt : "Je t'ecoute !" ,     
     showPopup : true, 
     showPartial  : false
  }
  this.speechRecognition.startListening(options)
  .subscribe(
    (matches: Array<string>) => {
    this.matches = matches;
    this.changeDetectorRef.detectChanges();
    },
    (onerror) => {
      console.log("Ya un problem");
      this.changeDetectorRef.detectChanges();
    }
  )

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
sendA(){
  this.bluetoothSerial.isConnected().then((success) => {
    this.bluetoothSerial.write("A");
 this.sVar = "A";
          })
}
sendB(){
  this.bluetoothSerial.isConnected().then((success) => {
    this.bluetoothSerial.write("B");
    this.sVar = "B";
          })
}
sendC(){
  this.bluetoothSerial.isConnected().then((success) => {
    this.bluetoothSerial.write("C");
    this.sVar = "C";
          })
}
sendD(){
  this.bluetoothSerial.isConnected().then((success) => {
    this.bluetoothSerial.write("D");
    this.sVar = "D";
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















  private goBack(){
    this.navCtrl.push(KoulchiPage);

}

  
}


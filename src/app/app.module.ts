import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule,ToastController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { SpeechRecognition } from '@ionic-native/speech-recognition';



import { HomePage } from '../pages/home/home';
import { KoulchiPage } from '../pages/koulchi/koulchi';
import { BluetoothPage } from '../pages/bluetooth/bluetooth';
import { AboutPage } from '../pages/about/about';
import { OfficePage } from '../pages/office/office';
import { DistPage } from '../pages/dist/dist';
import { WifiPage } from '../pages/wifi/wifi';
import { VoicePage } from '../pages/voice/voice';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    KoulchiPage,
    BluetoothPage,
    AboutPage,
    OfficePage,
    DistPage,
    WifiPage,
    VoicePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    KoulchiPage,
    BluetoothPage,
    AboutPage,
    OfficePage,
    DistPage,
    WifiPage,
    VoicePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BluetoothSerial,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpeechRecognition,
    ToastController
  ]
})
export class AppModule {}

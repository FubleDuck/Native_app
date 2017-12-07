import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';



@Component({
  selector: 'page-office',
  templateUrl: 'office.html'
})
export class OfficePage {
constructor(public navCtrl: NavController, private navParams : NavParams) {
    
    
  }


  slides = [
    {
      title: "Nohaila Naji",
      description: "The <b>President</b> of the Robotics Club .",
      image: "assets/office/noha.jpg",
    },
    {
      title: "Chaimae Bouzid",
      description: "<b>Vice President</b>, she is the president when Nohaila isn't there... I guess !",
      image: "assets/office/chaimae.jpg",
    },
    {
      title: "Imran Nassim",
      description: "The <b>Tresorier</b>, he takes care of the <b>MONEY</b> xD.",
      image: "assets/office/imran.jpg",
    },
    {
      title: "Asmae EL",
      description: "<b>Secretary</b>, I have no idea what she does...",
      image: "assets/office/asmae.jpg",
    },
    {
      title: "Hajar Q",
      description: "The <b>Sponsoring</b>, tries to bring sponsors to the club !",
      image: "assets/office/hajar.jpg",
    },
    {
      title: "Achraf T.",
      description: "The <b>Doc-Cell</b>, writes documents and many other stuff",
      image: "assets/office/achraf.jpg",
    },
    {
      title: "Aymane Kas",
      description: "The <b>Media-Cell</b>, .................",
      image: "assets/office/me.jpg",
    }
  ];


  

  private goHome(){
    this.navCtrl.push(HomePage);

}
}

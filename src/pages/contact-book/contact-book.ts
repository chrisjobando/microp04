import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewContactPage } from '../new-contact/new-contact';

@IonicPage()
@Component({
  selector: 'page-contact-book',
  templateUrl: 'contact-book.html',
})
export class ContactBookPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactBookPage');
  }

  onLoadContactsPage() {
    this.navCtrl.push(NewContactPage);
  }

}

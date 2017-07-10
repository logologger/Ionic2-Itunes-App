import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder,Validators} from '@angular/forms';
/**
 * Generated class for the ContactusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactusPage {
	contactForm;

  constructor(public navCtrl: NavController, public navParams: NavParams,public fb:FormBuilder) {
  
  	this.contactForm = fb.group({
  		name:['',Validators.required],
  		email:['',Validators.required]
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
  }
  submitForm(){
  	console.log("Submitting");
  }

}

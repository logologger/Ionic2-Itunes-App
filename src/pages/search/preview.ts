import { Component } from '@angular/core';
import {NavController,NavParams,ViewController} from 'ionic-angular';


@Component({
	template:`
	<ion-content padding>
	<h2>{{track.trackName}}</h2>
	<audio [src]="track.previewUrl" *ngIf="track.kind ==='song'" autoplay="autoplay" controls="controls">
		Browser Does not Support Audio
	</audio>
	<video [src]="track.previewUrl"  *ngIf="track.kind==='feature-movie'" autoplay="autoplay" controls="controls">
		Browser Doesn't Support
	</video>
	<button ion-button round  (click)="close()">Close</button>
	</ion-content>
	`
})
export class PreviewModal{

	track;

	constructor(params:NavParams,public viewCtrl:ViewController){

		this.track=params.data.track;

	}
	close(){

		this.viewCtrl.dismiss();

	}
}
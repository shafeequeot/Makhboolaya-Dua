/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:39
**/

import { Component , OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { environment } from "./../../../../src/environments/environment";
import { Storage } from "@ionic/storage";
import { PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../../components/popover/popover.component";
//export


@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"],
})

export class HomePage {
	
	pageName:string = `home` ;
	
	/**
	* HomePage:constructor()
	**/
	constructor(
		private router: Router,
		public statusBar: StatusBar,
		public popoverController: PopoverController,
		private storage: Storage
	){
	
		// statusbar
		this.statusBar.styleLightContent();
		this.statusBar.overlaysWebView(false);
		this.statusBar.backgroundColorByHexString("#006450");
	
	
//constructor
		console.log(`HomePage`,`pageName`,this.pageName);
	}
	
	/**
	* HomePage:showPopover()
	**/
	async showPopover(ev: any) {
		const popover = await this.popoverController.create({
			component: PopoverComponent,
			event: ev,
			translucent: true
		});
		return await popover.present();
	}
	
	


	slideItems: any;
public ngOnInit(){
	
	this.slideItems = 
[
    {
        "title": "Welcome to <br\/>Makhboolaya Dua!",
        "description": "Makhbool aya Dua  and Selected Hadees",
        "image": "assets\/images\/slides\/image-1.png"
    },
    {
        "title": "Like Magic!",
        "description": "Suspendisse rhoncus neque quis neque luctus, sit amet dictum ex condimentum",
        "image": "assets\/images\/slides\/image-2.png"
    },
    {
        "title": "Unlimited App!",
        "description": "Aliquam imperdiet pharetra ligula ut ullamcorper. Maecenas pharetra imperdiet nunc",
        "image": "assets\/images\/slides\/image-2.png"
    }
]
	
	}
	




}

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



@Component({
	selector: "app-about-us",
	templateUrl: "about-us.page.html",
	styleUrls: ["about-us.page.scss"],
})

export class AboutUsPage {

	// variable for segment tab
	segmentTab: string = "about-us";

	
	pageName:string = `about-us` ;
	
	/**
	* AboutUsPage:constructor()
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
	
	

		console.log(`AboutUsPage`,`pageName`,this.pageName);
	}
	
	/**
	* AboutUsPage:showPopover()
	**/
	async showPopover(ev: any) {
		const popover = await this.popoverController.create({
			component: PopoverComponent,
			event: ev,
			translucent: true
		});
		return await popover.present();
	}
	
	


	


	/**
	* AboutUsPage:ngOnInit()
	* @param string $url = 'http://ihsana.com/'
	**/
	public ngOnInit()
	{
	}  



}

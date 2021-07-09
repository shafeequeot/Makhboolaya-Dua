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
import { ActivatedRoute } from "@angular/router";
import { PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../../components/popover/popover.component";



@Component({
	selector: "app-rogam",
	templateUrl: "rogam.page.html",
	styleUrls: ["rogam.page.scss"],
})

export class RogamPage {

	//url parameter
	public rogam : string;

	
	pageName:string = `rogam` ;
	
	/**
	* RogamPage:constructor()
	**/
	constructor(
		private router: Router,
		public statusBar: StatusBar,
		public popoverController: PopoverController,
		public activatedRoute: ActivatedRoute,
		private storage: Storage
	){
	
		// statusbar
		this.statusBar.styleLightContent();
		this.statusBar.overlaysWebView(false);
		this.statusBar.backgroundColorByHexString("#006450");
	
	
		this.rogam = this.activatedRoute.snapshot.paramMap.get("rogam");

		console.log(`RogamPage`,`pageName`,this.pageName);
	}
	
	/**
	* RogamPage:showPopover()
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
	* RogamPage:ngOnInit()
	* @param string $url = 'http://ihsana.com/'
	**/
	public ngOnInit()
	{
	}  


}

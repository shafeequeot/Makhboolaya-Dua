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
	selector: "app-makboolayadua",
	templateUrl: "makboolayadua.page.html",
	styleUrls: ["makboolayadua.page.scss"],
})

export class MakboolayaduaPage {

	//url parameter
	public dua : string;

	
	pageName:string = `makboolayadua` ;
	
	/**
	* MakboolayaduaPage:constructor()
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
	
	
		this.dua = this.activatedRoute.snapshot.paramMap.get("dua");

		console.log(`MakboolayaduaPage`,`pageName`,this.pageName);
	}
	
	/**
	* MakboolayaduaPage:showPopover()
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
	* MakboolayaduaPage:ngOnInit()
	* @param string $url = 'http://ihsana.com/'
	**/
	public ngOnInit()
	{
	}  


}

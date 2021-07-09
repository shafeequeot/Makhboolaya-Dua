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
import { Observable } from "rxjs";
import { DuaService } from "./../../services/dua/dua.service";
import { PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../../components/popover/popover.component";



@Component({
	selector: "app-dua-detail",
	templateUrl: "dua-detail.page.html",
	styleUrls: ["dua-detail.page.scss"],
})

export class DuaDetailPage {

	//url parameter
	public id : string;

	
	pageName:string = `dua-detail` ;
	
	/**
	* DuaDetailPage:constructor()
	**/
	constructor(
		private router: Router,
		public statusBar: StatusBar,
		public duaService: DuaService,
		public popoverController: PopoverController,
		public activatedRoute: ActivatedRoute,
		private storage: Storage
	){
	
		// statusbar
		this.statusBar.styleLightContent();
		this.statusBar.overlaysWebView(false);
		this.statusBar.backgroundColorByHexString("#006450");
	
	
		this.id = this.activatedRoute.snapshot.paramMap.get("id");

		console.log(`DuaDetailPage`,`pageName`,this.pageName);
	}
	
	/**
	* DuaDetailPage:showPopover()
	**/
	async showPopover(ev: any) {
		const popover = await this.popoverController.create({
			component: PopoverComponent,
			event: ev,
			translucent: true
		});
		return await popover.present();
	}
	
	


		
	
	
	dua: Observable<any>;
	dataDua: any = {};
	
	/**
	* DuaDetailPage:getJSON(url: string)
	**/
	public getItem(){
		this.dua = this.duaService.getItems(null);
		this.dua.subscribe(data => {
			for (let item of data){
				if( item.id.toString() === this.id.toString()){
					this.dataDua = item ;
				}
				//console.log(item.id.toString(),this.id.toString());
			};
		});
	}
	
	
	
	/**
	* DuaDetailPage:doRefresh()
	**/
	public doRefresh(refresher){
		this.dataDua = {};
		setTimeout(() => {
			refresher.target.complete();
		}, 100);
		this.getItem();
	}
	
	
	/**
	* DuaDetailPage:ngOnInit()
	**/
	public ngOnInit(){
		this.dataDua = {};
		this.getItem();
	}
	




}

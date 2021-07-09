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
import { VasthramService } from "./../../services/vasthram/vasthram.service";
import { PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../../components/popover/popover.component";



@Component({
	selector: "app-vasthram-detail",
	templateUrl: "vasthram-detail.page.html",
	styleUrls: ["vasthram-detail.page.scss"],
})

export class VasthramDetailPage {

	//url parameter
	public id : string;

	
	pageName:string = `vasthram-detail` ;
	
	/**
	* VasthramDetailPage:constructor()
	**/
	constructor(
		private router: Router,
		public statusBar: StatusBar,
		public vasthramService: VasthramService,
		public popoverController: PopoverController,
		public activatedRoute: ActivatedRoute,
		private storage: Storage
	){
	
		// statusbar
		this.statusBar.styleLightContent();
		this.statusBar.overlaysWebView(false);
		this.statusBar.backgroundColorByHexString("#006450");
	
	
		this.id = this.activatedRoute.snapshot.paramMap.get("id");

		console.log(`VasthramDetailPage`,`pageName`,this.pageName);
	}
	
	/**
	* VasthramDetailPage:showPopover()
	**/
	async showPopover(ev: any) {
		const popover = await this.popoverController.create({
			component: PopoverComponent,
			event: ev,
			translucent: true
		});
		return await popover.present();
	}
	
	


		
	
	
	vasthram: Observable<any>;
	dataVasthram: any = {};
	
	/**
	* VasthramDetailPage:getJSON(url: string)
	**/
	public getItem(){
		this.vasthram = this.vasthramService.getItems();
		this.vasthram.subscribe(data => {
			for (let item of data){
				if( item.id.toString() === this.id.toString()){
					this.dataVasthram = item ;
				}
				//console.log(item.id.toString(),this.id.toString());
			};
		});
	}
	
	
	
	/**
	* VasthramDetailPage:doRefresh()
	**/
	public doRefresh(refresher){
		this.dataVasthram = {};
		setTimeout(() => {
			refresher.target.complete();
		}, 100);
		this.getItem();
	}
	
	
	/**
	* VasthramDetailPage:ngOnInit()
	**/
	public ngOnInit(){
		this.dataVasthram = {};
		this.getItem();
	}
	


	




}

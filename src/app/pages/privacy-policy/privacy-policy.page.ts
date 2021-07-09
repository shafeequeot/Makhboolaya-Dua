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
import { Observable } from "rxjs";
import { PrivacyPolicyService } from "./../../services/privacy-policy/privacy-policy.service";
import { ViewChild } from "@angular/core";
import { IonInfiniteScroll } from "@ionic/angular";
import { PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../../components/popover/popover.component";



@Component({
	selector: "app-privacy-policy",
	templateUrl: "privacy-policy.page.html",
	styleUrls: ["privacy-policy.page.scss"],
})

export class PrivacyPolicyPage {

	// search query
	filterQuery: string = "";

	
	pageName:string = `privacy-policy` ;
	
	/**
	* PrivacyPolicyPage:constructor()
	**/
	constructor(
		private router: Router,
		public statusBar: StatusBar,
		public privacyPolicyService: PrivacyPolicyService,
		public popoverController: PopoverController,
		private storage: Storage
	){
	
		// statusbar
		this.statusBar.styleLightContent();
		this.statusBar.overlaysWebView(false);
		this.statusBar.backgroundColorByHexString("#006450");
	
	

		console.log(`PrivacyPolicyPage`,`pageName`,this.pageName);
	}
	
	/**
	* PrivacyPolicyPage:showPopover()
	**/
	async showPopover(ev: any) {
		const popover = await this.popoverController.create({
			component: PopoverComponent,
			event: ev,
			translucent: true
		});
		return await popover.present();
	}
	
	


		
	
	
	privacyPolicy: Observable<any>;
	dataPrivacyPolicy: any = [];
	filterDataPrivacyPolicy: any = [];
	
	//for infinite-scroll
	lastId:number = 0;
	firstLoad:number = 20;
	perPage:number = 20;
	
	@ViewChild("IonInfiniteScroll",{static: false}) infiniteScroll: IonInfiniteScroll;
	
	
	
	/**
	* PrivacyPolicyPage:getItems()
	**/
	getItems(){
		this.privacyPolicy = this.privacyPolicyService.getItems();
		this.privacyPolicy.subscribe(data => {
			this.dataPrivacyPolicy = data ;
			this.lastId = 0;
			let newData : any = [];
			for (let item of data) {
				if(this.lastId <= (this.firstLoad -1) ) {
					newData[this.lastId] = item;
					//console.log(this.lastId);
					this.lastId++;
				}
			}
			this.filterDataPrivacyPolicy = newData;
		});
	}
	
	
	/**
	* PrivacyPolicyPage:filterItems($event)
	* @param any $event
	*
	* @required for searchbar
	**/
	public filterItems(evt: any) {
		this.filterDataPrivacyPolicy = this.dataPrivacyPolicy;
		let filterVal = evt.target.value;
		if (filterVal && filterVal.trim() !== "") {
			this.filterDataPrivacyPolicy = this.dataPrivacyPolicy.filter((newItem) => {
				if(newItem.text){
					return newItem.text.toLowerCase().indexOf(filterVal.toLowerCase()) > -1;
				}
			});
		}
	}
	
	
	/**
	* PrivacyPolicyPage:loadMore(event)
	* @param event $event
	**/
	public loadMore(event){
		let newData : any = [];
		let nextPage:number = this.perPage + this.lastId;
		for (let item of this.dataPrivacyPolicy){
			if(this.lastId < this.dataPrivacyPolicy.length){
				if(this.lastId < nextPage){
					this.filterDataPrivacyPolicy[this.lastId] = this.dataPrivacyPolicy[this.lastId];
					//console.log("more data",this.lastId);
					this.lastId++;
				}
			}
		}
		setTimeout(() => {
			event.target.complete();
			if( this.lastId >= this.dataPrivacyPolicy.length){
				event.target.enable = false;
			}
		}, 500);
	}
	
	
	/**
	* PrivacyPolicyPage:doRefresh()
	**/
	public doRefresh(refresher){
		this.dataPrivacyPolicy = [] ;
		this.filterDataPrivacyPolicy = [] ;
		setTimeout(() => {
			refresher.target.complete();
		}, 100);
		this.getItems();
	}
	
	
	/**
	* PrivacyPolicyPage:ngOnInit()
	**/
	public ngOnInit(){
		this.dataPrivacyPolicy = [] ;
		this.filterDataPrivacyPolicy = [] ;
		this.getItems();
	}
	




}

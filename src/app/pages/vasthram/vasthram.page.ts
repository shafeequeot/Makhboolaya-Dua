/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:40
**/

import { Component , OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { environment } from "./../../../../src/environments/environment";
import { Storage } from "@ionic/storage";
import { Observable } from "rxjs";
import { VasthramService } from "./../../services/vasthram/vasthram.service";
import { ViewChild } from "@angular/core";
import { IonInfiniteScroll } from "@ionic/angular";
import { PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../../components/popover/popover.component";



@Component({
	selector: "app-vasthram",
	templateUrl: "vasthram.page.html",
	styleUrls: ["vasthram.page.scss"],
})

export class VasthramPage {

	// search query
	filterQuery: string = "";

	
	pageName:string = `vasthram` ;
	
	/**
	* VasthramPage:constructor()
	**/
	constructor(
		private router: Router,
		public statusBar: StatusBar,
		public vasthramService: VasthramService,
		public popoverController: PopoverController,
		private storage: Storage
	){
	
		// statusbar
		this.statusBar.styleLightContent();
		this.statusBar.overlaysWebView(false);
		this.statusBar.backgroundColorByHexString("#006450");
	
	

		console.log(`VasthramPage`,`pageName`,this.pageName);
	}
	
	/**
	* VasthramPage:showPopover()
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
	dataVasthram: any = [];
	filterDataVasthram: any = [];
	
	//for infinite-scroll
	lastId:number = 0;
	firstLoad:number = 20;
	perPage:number = 20;
	
	@ViewChild("IonInfiniteScroll",{static: false}) infiniteScroll: IonInfiniteScroll;
	
	
	
	/**
	* VasthramPage:getItems()
	**/
	getItems(){
		this.vasthram = this.vasthramService.getItems();
		this.vasthram.subscribe(data => {
			this.dataVasthram = data ;
			this.lastId = 0;
			let newData : any = [];
			for (let item of data) {
				if(this.lastId <= (this.firstLoad -1) ) {
					newData[this.lastId] = item;
					//console.log(this.lastId);
					this.lastId++;
				}
			}
			this.filterDataVasthram = newData;
		});
	}
	
	
	/**
	* VasthramPage:filterItems($event)
	* @param any $event
	*
	* @required for searchbar
	**/
	public filterItems(evt: any) {
		this.filterDataVasthram = this.dataVasthram;
		let filterVal = evt.target.value;
		if (filterVal && filterVal.trim() !== "") {
			this.filterDataVasthram = this.dataVasthram.filter((newItem) => {
				if(newItem.heading){
					return newItem.heading.toLowerCase().indexOf(filterVal.toLowerCase()) > -1;
				}
			});
		}
	}
	
	
	/**
	* VasthramPage:loadMore(infiniteScroll)
	* @param event $infiniteScroll
	**/
	public loadMore(infiniteScroll){
		let newData : any = [];
		let nextPage:number = this.perPage + this.lastId;
		for (let item of this.dataVasthram){
			if(this.lastId < this.dataVasthram.length){
				if(this.lastId < nextPage){
					this.filterDataVasthram[this.lastId] = this.dataVasthram[this.lastId];
					//console.log("more data",this.lastId);
					this.lastId++;
				}
			}
		}
		setTimeout(() => {
			infiniteScroll.target.complete();
			if( this.lastId >= this.dataVasthram.length){
				infiniteScroll.target.enable = false;
			}
		}, 500);
	}
	
	
	/**
	* VasthramPage:doRefresh()
	**/
	public doRefresh(refresher){
		this.dataVasthram = [] ;
		this.filterDataVasthram = [] ;
		setTimeout(() => {
			refresher.target.complete();
		}, 100);
		this.getItems();
	}
	
	
	/**
	* VasthramPage:ngOnInit()
	**/
	public ngOnInit(){
		this.dataVasthram = [] ;
		this.filterDataVasthram = [] ;
		this.getItems();
	}
	




}

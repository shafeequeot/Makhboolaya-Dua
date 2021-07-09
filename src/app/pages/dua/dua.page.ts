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
import { ViewChild } from "@angular/core";
import { IonInfiniteScroll } from "@ionic/angular";
import { PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../../components/popover/popover.component";



@Component({
	selector: "app-dua",
	templateUrl: "dua.page.html",
	styleUrls: ["dua.page.scss"],
})

export class DuaPage {

	//url parameter
	public paramId : string;


	// search query
	filterQuery: string = "";

	
	pageName:string = `dua` ;
	
	/**
	* DuaPage:constructor()
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
	
	
		this.paramId = this.activatedRoute.snapshot.paramMap.get("param_id");

		console.log(`DuaPage`,`pageName`,this.pageName);
	}
	
	/**
	* DuaPage:showPopover()
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
	dataDua: any = [];
	filterDataDua: any = [];
	
	//for infinite-scroll
	lastId:number = 0;
	firstLoad:number = 20;
	perPage:number = 20;
	
	@ViewChild("IonInfiniteScroll",{static: false}) infiniteScroll: IonInfiniteScroll;
	
	
	
	/**
	* DuaPage:getItems()
	**/
	getItems(){
		if(this.paramId == null){
			this.paramId = "-1";
		}
		this.dua = this.duaService.getItems(this.paramId);
		this.dua.subscribe(data => {
			// replace query_id
			let offLineId:number = 0;
			let offlineData : any = [];
			for (let item of data) {
				if(item["category"] == this.paramId){
					offlineData[offLineId] = item;
					offLineId++;
				}
			}
			data = offlineData;
			this.dataDua = data ;
			this.lastId = 0;
			let newData : any = [];
			for (let item of data) {
				if(this.lastId <= (this.firstLoad -1) ) {
					newData[this.lastId] = item;
					//console.log(this.lastId);
					this.lastId++;
				}
			}
			this.filterDataDua = newData;
		});
	}
	
	
	/**
	* DuaPage:filterItems($event)
	* @param any $event
	*
	* @required for searchbar
	**/
	public filterItems(evt: any) {
		this.filterDataDua = this.dataDua;
		let filterVal = evt.target.value;
		if (filterVal && filterVal.trim() !== "") {
			this.filterDataDua = this.dataDua.filter((newItem) => {
				if(newItem.heading){
					return newItem.heading.toLowerCase().indexOf(filterVal.toLowerCase()) > -1;
				}
			});
		}
	}
	
	
	/**
	* DuaPage:loadMore(event)
	* @param event $event
	**/
	public loadMore(event){
		let newData : any = [];
		let nextPage:number = this.perPage + this.lastId;
		for (let item of this.dataDua){
			if(this.lastId < this.dataDua.length){
				if(this.lastId < nextPage){
					this.filterDataDua[this.lastId] = this.dataDua[this.lastId];
					//console.log("more data",this.lastId);
					this.lastId++;
				}
			}
		}
		setTimeout(() => {
			event.target.complete();
			if( this.lastId >= this.dataDua.length){
				event.target.enable = false;
			}
		}, 500);
	}
	
	
	/**
	* DuaPage:doRefresh()
	**/
	public doRefresh(refresher){
		this.dataDua = [] ;
		this.filterDataDua = [] ;
		setTimeout(() => {
			refresher.target.complete();
		}, 100);
		this.getItems();
	}
	
	
	/**
	* DuaPage:ngOnInit()
	**/
	public ngOnInit(){
		this.dataDua = [] ;
		this.filterDataDua = [] ;
		this.getItems();
	}
	




}

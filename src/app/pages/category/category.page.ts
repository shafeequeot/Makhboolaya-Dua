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
import { CategoryService } from "./../../services/category/category.service";
import { ViewChild } from "@angular/core";
import { IonInfiniteScroll } from "@ionic/angular";
import { PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../../components/popover/popover.component";
import { Platform } from "@ionic/angular";



@Component({
	selector: "app-category",
	templateUrl: "category.page.html",
	styleUrls: ["category.page.scss"],
})

export class CategoryPage {

	// search query
	filterQuery: string = "";

	
	pageName:string = `category` ;
	
	/**
	* CategoryPage:constructor()
	**/
	constructor(
		private router: Router,
		public statusBar: StatusBar,
		public categoryService: CategoryService,
		public popoverController: PopoverController,
		public platform: Platform,
		private storage: Storage
	){
	
		// statusbar
		this.statusBar.styleLightContent();
		this.statusBar.overlaysWebView(false);
		this.statusBar.backgroundColorByHexString("#006450");
	
	

		console.log(`CategoryPage`,`pageName`,this.pageName);
	}
	
	/**
	* CategoryPage:showPopover()
	**/
	async showPopover(ev: any) {
		const popover = await this.popoverController.create({
			component: PopoverComponent,
			event: ev,
			translucent: true
		});
		return await popover.present();
	}
	
	


		
	
	
	category: Observable<any>;
	dataCategory: any = [];
	filterDataCategory: any = [];
	
	//for infinite-scroll
	lastId:number = 0;
	firstLoad:number = 20;
	perPage:number = 20;
	
	@ViewChild("IonInfiniteScroll",{static: false}) infiniteScroll: IonInfiniteScroll;
	
	
	
	/**
	* CategoryPage:getItems()
	**/
	getItems(){
		this.category = this.categoryService.getItems();
		this.category.subscribe(data => {
			this.dataCategory = data ;
			this.lastId = 0;
			let newData : any = [];
			for (let item of data) {
				if(this.lastId <= (this.firstLoad -1) ) {
					newData[this.lastId] = item;
					//console.log(this.lastId);
					this.lastId++;
				}
			}
			this.filterDataCategory = newData;
		});
	}
	
	
	/**
	* CategoryPage:filterItems($event)
	* @param any $event
	*
	* @required for searchbar
	**/
	public filterItems(evt: any) {
		this.filterDataCategory = this.dataCategory;
		let filterVal = evt.target.value;
		if (filterVal && filterVal.trim() !== "") {
			this.filterDataCategory = this.dataCategory.filter((newItem) => {
				if(newItem.category){
					return newItem.category.toLowerCase().indexOf(filterVal.toLowerCase()) > -1;
				}
			});
		}
	}
	
	
	/**
	* CategoryPage:loadMore(event)
	* @param event $event
	**/
	public loadMore(event){
		let newData : any = [];
		let nextPage:number = this.perPage + this.lastId;
		for (let item of this.dataCategory){
			if(this.lastId < this.dataCategory.length){
				if(this.lastId < nextPage){
					this.filterDataCategory[this.lastId] = this.dataCategory[this.lastId];
					//console.log("more data",this.lastId);
					this.lastId++;
				}
			}
		}
		setTimeout(() => {
			event.target.complete();
			if( this.lastId >= this.dataCategory.length){
				event.target.enable = false;
			}
		}, 500);
	}
	
	
	/**
	* CategoryPage:doRefresh()
	**/
	public doRefresh(refresher){
		this.dataCategory = [] ;
		this.filterDataCategory = [] ;
		setTimeout(() => {
			refresher.target.complete();
		}, 100);
		this.getItems();
	}
	
	
	/**
	* CategoryPage:ngOnInit()
	**/
	public ngOnInit(){
		this.dataCategory = [] ;
		this.filterDataCategory = [] ;
		this.getItems();
	}
	




}

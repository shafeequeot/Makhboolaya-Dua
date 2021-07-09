/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:40
**/

import { Component } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { AppSideMenus } from "./app.side-menus";

import { Platform, NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { InAppBrowser,InAppBrowserOptions } from "@ionic-native/in-app-browser/ngx";
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationError } from "@angular/router";
import { Device } from "@ionic-native/device/ngx";
import { Globals } from "./class/globals/globals";
import { environment } from "./../../src/environments/environment";



@Component({
	selector: "app-root",
	templateUrl: "app.component.html"
})
export class AppComponent {

	appTitle:string = "  ";
	appSubTitle:string = "";
	appMenus:any = [] ;



	/**
	* MakhboolayaDua:constructor()
	**/

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private menuController: MenuController,
		private platform: Platform,
		private storage: Storage,
		private statusBar: StatusBar,
		private navController: NavController,
		private splashScreen: SplashScreen,
		private device: Device,
		private globals: Globals,
		private appSideMenus: AppSideMenus){
			//initialization items for static menu
			this.appMenus = this.appSideMenus.items;
			//initialization app
			this.initializeApp();
	}
	

	/**
	* MakhboolayaDua:initializeApp()
	**/

	initializeApp() {
		this.platform.ready().then(() => {

			// set status bar
			this.statusBar.backgroundColorByHexString("#006450");

			// hide splashscreen
			this.splashScreen.hide();

		});


		this.handlerBackButton();
		
	}


	/**
	* MakhboolayaDua:handlerBackButton();
	**/
	private handlerBackButton(){
		let pageName = `category`;
		this.router.events.subscribe((event: Event) =>{
			if(event instanceof NavigationStart){
				let getPage = event.url.toString().split("/");
				pageName = getPage[1];
				console.log(`pageName`,pageName);
			}
		});
		this.platform.backButton.subscribeWithPriority(666666,()=>{
			if(( pageName == "" ) || ( pageName == `category` )){
				console.log(`Hardware Exit`);
				if(window.confirm("Do you want to exit App?")){
					navigator["app"].exitApp(); 
				}
			}else{
				console.log(`Hardware Back`);
				this.navController.back();
			}
		})
	}



}

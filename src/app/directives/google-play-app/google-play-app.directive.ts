/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:40
**/

import { Directive, HostListener, Input, ElementRef } from "@angular/core";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { InAppBrowserOptions } from "@ionic-native/in-app-browser/ngx";

@Directive({
	selector: "[googlePlayApp]"
})

export class GooglePlayAppDirective {

	@Input() appId: string;

	constructor( 
		private elementRef: ElementRef,
		private inAppBrowser: InAppBrowser
	 ){


	}






	@HostListener("click", ["$event"]) onClick(e){
		this.runGooglePlayApp(this.appId);
	}


	
	/**
	* runGooglePlayApp($appId)
	* @param string $appId = "com.imabuilder.myapp"
	**/
	
	private runGooglePlayApp(app_id: string){
		let myAppID = app_id || "com.imabuilder.mediafoster.makhboolayadua";
		if(myAppID == ""){
			myAppID = "com.imabuilder.mediafoster.makhboolayadua";
		}
		let urlSchema = "market://details?id=" + myAppID;
		this.inAppBrowser.create(urlSchema,"_system");
	}
	


}

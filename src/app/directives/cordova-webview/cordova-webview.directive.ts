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
	selector: "[cordovaWebview]"
})

export class CordovaWebviewDirective {

	@Input() url: string;

	constructor( 
		private elementRef: ElementRef,
		private inAppBrowser: InAppBrowser
	 ){


	}






	@HostListener("click", ["$event"]) onClick(e){
		this.runCordovaWebview(this.url);
	}


	
	/**
	* runCordovaWebview($url)
	* @param string $url = "http://ihsana.com"
	**/
	
	private runCordovaWebview(url: string){
		let urlAddr = url || "http://ihsana.com";
		this.inAppBrowser.create(urlAddr,"_self");
	}
	


}

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
	selector: "[twitterApp]"
})

export class TwitterAppDirective {

	@Input() message: string;

	constructor( 
		private elementRef: ElementRef,
		private inAppBrowser: InAppBrowser
	 ){


	}






	@HostListener("click", ["$event"]) onClick(e){
		this.runTwitter(this.message);
	}


	
	/**
	* runTwitter($message)
	* @param string $message = "hi there"
	**/
	
	private runTwitter(message: string){
		let myMessage = message || "Hi";
		if(myMessage == ""){
			myMessage = "Hi";
		}
		let urlSchema = "twitter://post?message=" + encodeURIComponent(myMessage) ;
		this.inAppBrowser.create(urlSchema,"_system");
	}
	


}

/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:40
**/

import { CordovaWebviewDirective } from "./cordova-webview.directive";

describe("CordovaWebviewDirective", () => {
	it("should create an instance", () => {
		let elementRef = null;
		let inAppBrowser = null;
		// please write the code manually
		const directive = new CordovaWebviewDirective(elementRef,inAppBrowser);
		expect(directive).toBeTruthy();
	});
});

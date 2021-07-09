/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:40
**/

import { AppBrowserDirective } from "./app-browser.directive";

describe("AppBrowserDirective", () => {
	it("should create an instance", () => {
		let elementRef = null;
		let inAppBrowser = null;
		let platform = null;
		// please write the code manually
		const directive = new AppBrowserDirective(elementRef,inAppBrowser,platform);
		expect(directive).toBeTruthy();
	});
});

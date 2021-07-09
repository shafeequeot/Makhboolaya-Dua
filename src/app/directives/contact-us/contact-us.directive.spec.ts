/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:40
**/

import { ContactUsDirective } from "./contact-us.directive";

describe("ContactUsDirective", () => {
	it("should create an instance", () => {
		let elementRef = null;
		let inAppBrowser = null;
		let actionSheetController = null;
		let platform = null;
		// please write the code manually
		const directive = new ContactUsDirective(elementRef,inAppBrowser,actionSheetController,platform);
		expect(directive).toBeTruthy();
	});
});

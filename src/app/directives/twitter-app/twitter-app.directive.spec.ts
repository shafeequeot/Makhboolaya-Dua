/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:41
**/

import { TwitterAppDirective } from "./twitter-app.directive";

describe("TwitterAppDirective", () => {
	it("should create an instance", () => {
		let elementRef = null;
		let inAppBrowser = null;
		// please write the code manually
		const directive = new TwitterAppDirective(elementRef,inAppBrowser);
		expect(directive).toBeTruthy();
	});
});

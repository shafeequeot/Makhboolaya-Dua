/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:40
**/

import { TrustResourceUrlPipe } from "./trust-resource-url.pipe";

describe("TrustResourceUrlPipe", () => {
	it("create an instance", () => {
		// please write the code manually
		let domSanitizer= null ;
		const pipe = new TrustResourceUrlPipe(domSanitizer);
		expect(pipe).toBeTruthy();
	});
});

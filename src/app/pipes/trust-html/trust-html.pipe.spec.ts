/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:40
**/

import { TrustHtmlPipe } from "./trust-html.pipe";

describe("TrustHtmlPipe", () => {
	it("create an instance", () => {
		// please write the code manually
		let domSanitizer= null ;
		const pipe = new TrustHtmlPipe(domSanitizer);
		expect(pipe).toBeTruthy();
	});
});

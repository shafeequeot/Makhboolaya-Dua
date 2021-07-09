/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:40
**/

import { TrustUrlPipe } from "./trust-url.pipe";

describe("TrustUrlPipe", () => {
	it("create an instance", () => {
		// please write the code manually
		let domSanitizer= null ;
		const pipe = new TrustUrlPipe(domSanitizer);
		expect(pipe).toBeTruthy();
	});
});

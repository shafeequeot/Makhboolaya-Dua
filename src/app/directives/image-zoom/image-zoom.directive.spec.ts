/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:40
**/

import { ImageZoomDirective } from "./image-zoom.directive";

describe("ImageZoomDirective", () => {
	it("should create an instance", () => {
		let elementRef = null;
		let modalController = null;
		// please write the code manually
		const directive = new ImageZoomDirective(elementRef,modalController);
		expect(directive).toBeTruthy();
	});
});

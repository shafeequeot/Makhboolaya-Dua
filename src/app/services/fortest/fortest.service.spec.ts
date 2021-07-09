/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:41
**/

import { TestBed } from "@angular/core/testing";

import { FortestService } from "./fortest.service";

describe("FortestService", () => {
	beforeEach(() => TestBed.configureTestingModule({}));
	
	it("should be created", () => {
		const service: FortestService = TestBed.get(FortestService);
		expect(service).toBeTruthy();
	});
});

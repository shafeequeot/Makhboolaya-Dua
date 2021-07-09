/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:41
**/

import { TestBed } from "@angular/core/testing";

import { PrivacyPolicyService } from "./privacy-policy.service";

describe("PrivacyPolicyService", () => {
	beforeEach(() => TestBed.configureTestingModule({}));
	
	it("should be created", () => {
		const service: PrivacyPolicyService = TestBed.get(PrivacyPolicyService);
		expect(service).toBeTruthy();
	});
});

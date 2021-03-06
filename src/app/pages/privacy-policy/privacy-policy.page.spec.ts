/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:39
**/

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PrivacyPolicyPage } from "./privacy-policy.page";

describe("PrivacyPolicyPage", () => {
	let component: PrivacyPolicyPage;
	let fixture: ComponentFixture<PrivacyPolicyPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PrivacyPolicyPage ],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PrivacyPolicyPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

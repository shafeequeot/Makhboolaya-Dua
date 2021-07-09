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

import { RogamPage } from "./rogam.page";

describe("RogamPage", () => {
	let component: RogamPage;
	let fixture: ComponentFixture<RogamPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ RogamPage ],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RogamPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

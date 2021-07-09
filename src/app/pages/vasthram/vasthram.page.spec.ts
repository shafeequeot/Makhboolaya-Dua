/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:40
**/

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { VasthramPage } from "./vasthram.page";

describe("VasthramPage", () => {
	let component: VasthramPage;
	let fixture: ComponentFixture<VasthramPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ VasthramPage ],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VasthramPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

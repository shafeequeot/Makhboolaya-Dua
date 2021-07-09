/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:41
**/

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PopoverComponent } from "./popover.component";

describe("PopoverComponent", () => {
	let component: PopoverComponent;
	let fixture: ComponentFixture<PopoverComponent>;
	
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PopoverComponent ],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
		.compileComponents();
	}));
	
	beforeEach(() => {
		fixture = TestBed.createComponent(PopoverComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it("should create", () => {
		expect(component).toBeTruthy();
	});
});


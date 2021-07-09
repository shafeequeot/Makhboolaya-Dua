/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:41
**/

import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { DirectivesModule } from "./../directives/directives.module";

import { ImageZoomComponent } from "./image-zoom/image-zoom.component";
import { PopoverComponent } from "./popover/popover.component";

@NgModule({
	declarations: [
		ImageZoomComponent,
		PopoverComponent
	],
	imports: [
		CommonModule,
		IonicModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
		DirectivesModule
	],
	exports: [
		ImageZoomComponent,
		PopoverComponent
	],
	entryComponents: [
		ImageZoomComponent,
		PopoverComponent
	]
})

export class ComponentsModule {}

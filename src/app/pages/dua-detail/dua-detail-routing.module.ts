/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:39
**/

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DuaDetailPage } from "./dua-detail.page";

const routes: Routes = [
	{
		path: "",
		component: DuaDetailPage,
	}
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DuaDetailPageRoutingModule {}

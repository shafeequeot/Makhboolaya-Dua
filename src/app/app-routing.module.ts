/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:40
**/

import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		redirectTo: "category",
		pathMatch: "full"
	},
	{
		path: "about-us",
		loadChildren: () => import("./pages/about-us/about-us.module").then(m => m.AboutUsPageModule)
	},
	{
		path: "category",
		loadChildren: () => import("./pages/category/category.module").then(m => m.CategoryPageModule)
	},
	{
		path: "dua-detail",
		loadChildren: () => import("./pages/dua-detail/dua-detail.module").then(m => m.DuaDetailPageModule)
	},
	{
		path: "dua-detail/:id",
		loadChildren: () => import("./pages/dua-detail/dua-detail.module").then(m => m.DuaDetailPageModule)
	},
	{
		path: "dua",
		loadChildren: () => import("./pages/dua/dua.module").then(m => m.DuaPageModule)
	},
	{
		path: "dua/:param_id",
		loadChildren: () => import("./pages/dua/dua.module").then(m => m.DuaPageModule)
	},
	{
		path: "home",
		loadChildren: () => import("./pages/home/home.module").then(m => m.HomePageModule)
	},
	{
		path: "makboolayadua",
		loadChildren: () => import("./pages/makboolayadua/makboolayadua.module").then(m => m.MakboolayaduaPageModule)
	},
	{
		path: "makboolayadua/:dua",
		loadChildren: () => import("./pages/makboolayadua/makboolayadua.module").then(m => m.MakboolayaduaPageModule)
	},
	{
		path: "privacy-policy",
		loadChildren: () => import("./pages/privacy-policy/privacy-policy.module").then(m => m.PrivacyPolicyPageModule)
	},
	{
		path: "rabbana",
		loadChildren: () => import("./pages/rabbana/rabbana.module").then(m => m.RabbanaPageModule)
	},
	{
		path: "rogam",
		loadChildren: () => import("./pages/rogam/rogam.module").then(m => m.RogamPageModule)
	},
	{
		path: "rogam/:rogam",
		loadChildren: () => import("./pages/rogam/rogam.module").then(m => m.RogamPageModule)
	},
	{
		path: "vasthram-detail",
		loadChildren: () => import("./pages/vasthram-detail/vasthram-detail.module").then(m => m.VasthramDetailPageModule)
	},
	{
		path: "vasthram-detail/:id",
		loadChildren: () => import("./pages/vasthram-detail/vasthram-detail.module").then(m => m.VasthramDetailPageModule)
	},
	{
		path: "vasthram",
		loadChildren: () => import("./pages/vasthram/vasthram.module").then(m => m.VasthramPageModule)
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}

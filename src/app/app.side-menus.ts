/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:40
**/

import { Injectable } from "@angular/core";

@Injectable()

export class AppSideMenus{
	items:any = [
    {
        "item_type": "inlink",
        "item_label": "Dashboard",
        "item_var": "category",
        "item_link": "\/category",
        "item_value": "",
        "item_desc": "",
        "item_color_label": "undefined",
        "item_icon_left": "home",
        "item_color_icon_left": "primary",
        "item_icon_right": "",
        "item_color_icon_right": "undefined"
    },
    {
        "item_type": "playstore",
        "item_label": "Rate This App",
        "item_var": "rate_this_app",
        "item_link": "\/",
        "item_value": "",
        "item_desc": "",
        "item_color_label": "undefined",
        "item_icon_left": "logo-google-playstore",
        "item_color_icon_left": "primary",
        "item_icon_right": "",
        "item_color_icon_right": "undefined"
    },
    {
        "item_type": "inlink",
        "item_label": "About US",
        "item_var": "about_us",
        "item_link": "\/about-us",
        "item_value": "",
        "item_desc": "",
        "item_color_label": "undefined",
        "item_icon_left": "people-circle",
        "item_color_icon_left": "primary",
        "item_icon_right": "",
        "item_color_icon_right": "undefined"
    },
    {
        "item_type": "inlink",
        "item_label": "Privacy Policy",
        "item_var": "privacy_policy",
        "item_link": "\/privacy-policy",
        "item_value": "",
        "item_desc": "",
        "item_color_label": "undefined",
        "item_icon_left": "lock-closed-outline",
        "item_color_icon_left": "primary",
        "item_icon_right": "",
        "item_color_icon_right": "undefined"
    }
] ;

}

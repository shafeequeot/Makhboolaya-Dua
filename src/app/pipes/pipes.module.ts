/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:40
**/

import {NgModule} from "@angular/core";

import {ObjectLengthPipe} from "./object-length/object-length.pipe";
import {PhpTimePipe} from "./php-time/php-time.pipe";
import {ReadMorePipe} from "./read-more/read-more.pipe";
import {StripTagsPipe} from "./strip-tags/strip-tags.pipe";
import {TimeAgoPipe} from "./time-ago/time-ago.pipe";
import {TrustHtmlPipe} from "./trust-html/trust-html.pipe";
import {TrustResourceUrlPipe} from "./trust-resource-url/trust-resource-url.pipe";
import {TrustUrlPipe} from "./trust-url/trust-url.pipe";

@NgModule({
	declarations: [
		ObjectLengthPipe,
		PhpTimePipe,
		ReadMorePipe,
		StripTagsPipe,
		TimeAgoPipe,
		TrustHtmlPipe,
		TrustResourceUrlPipe,
		TrustUrlPipe
	],
	imports: [],
	exports: [
		ObjectLengthPipe,
		PhpTimePipe,
		ReadMorePipe,
		StripTagsPipe,
		TimeAgoPipe,
		TrustHtmlPipe,
		TrustResourceUrlPipe,
		TrustUrlPipe
	]
})

export class PipesModule {}

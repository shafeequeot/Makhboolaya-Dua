/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:40
**/

import { Pipe, PipeTransform } from "@angular/core";

/**
 * StripTags pipe
 * Used to strip HTML tags from a string

 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */


@Pipe({
	name: "stripTags",
})

export class StripTagsPipe implements PipeTransform {

	constructor(
		
	){



	}

	transform(text:string,...allowedTags:any[]): string{

			return allowedTags.length > 0
				? text.replace(new RegExp(`<(?!\/?(${allowedTags.join('|')})\s*\/?)[^>]+>`, 'g'), '')
				: text.replace(/<(?:.|\s)*?>/g, '');


	}
}

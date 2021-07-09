/**
* @author shafeequeot <shafeequeot@gmail.com>
* @copyright Makhboolaya Dua 2020
* @version 01.01.05
* @license licenses.txt
*
* @date 2020-12-17 08:35:40
**/

import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { SafeUrl } from "@angular/platform-browser";

/**
 * TrustUrl pipe
 * sanitizing URL

 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */


@Pipe({
	name: "trustUrl",
})

export class TrustUrlPipe implements PipeTransform {

	constructor(
		public domSanitizer: DomSanitizer
	){



	}

	transform(value:any): SafeUrl{

			return this.domSanitizer.bypassSecurityTrustUrl(value);


	}
}

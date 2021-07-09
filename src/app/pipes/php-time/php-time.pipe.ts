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
 * PhpTime pipe
 * Used to change the php format timestamp to JavaScript format

 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */


@Pipe({
	name: "phpTime",
})

export class PhpTimePipe implements PipeTransform {

	constructor(
		
	){



	}

	transform(num:string): number{

			return parseInt(num) * 1000 ;

	}
}

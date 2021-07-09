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
 * ObjectLength pipe
 * Get the object length

 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */


@Pipe({
	name: "objectLength",
})

export class ObjectLengthPipe implements PipeTransform {

	constructor(
		
	){



	}

	transform(obj:any): number{

			let keys = Object.keys(obj);
			return keys.length;


	}
}

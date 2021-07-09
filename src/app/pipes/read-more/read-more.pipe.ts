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
 * ReadMore pipe
 * Split text and give a trail

 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */


@Pipe({
	name: "readMore",
})

export class ReadMorePipe implements PipeTransform {

	constructor(
		
	){



	}

	transform(text:string,args:number): string{

			let trail = '...';
			let limit = args > 0 ? args : 100;
			return text.length > limit ? text.substring(0, limit) + trail : text;


	}
}

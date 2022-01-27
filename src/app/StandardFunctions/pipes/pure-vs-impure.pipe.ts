import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'count',
	pure: false //So wird die Pipe auch ausgelöst, wenn value z.B. ein Array ist und dem Array was hinzugefügt wird, die Referenz aber gleich bleibt
})
export class PureVsImpurePipe implements PipeTransform {
	transform(value: any, ...args: any[]): number {
		if (!this.checkInput(value)) {
			return 0;
		}
		return value.length;
	}

	private checkInput(obj: any): boolean {
		return obj && (typeof obj === "string" || Array.isArray(obj));
	}
}

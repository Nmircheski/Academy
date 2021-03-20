import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'timeToHours'})
export class TimePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        let hours = value/60;
        let minutes = value%60;

        return `${Math.trunc(hours)}h ${minutes}min`;
    }

}
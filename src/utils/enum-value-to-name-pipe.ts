import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'enumValueToName'
})
export class EnumValueToNamePipe implements PipeTransform {
    transform(value: any, enumType: object): string {
        return enumType[value];
    }

}

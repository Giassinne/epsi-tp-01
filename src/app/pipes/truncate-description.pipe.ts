import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateDescription',
})
export class TruncateDescriptionPipe implements PipeTransform {
  transform(value: string, length: number): string {
    if (!value) return '';
    return value.length > length ? value.substring(0, length) + '...' : value;
  }
}

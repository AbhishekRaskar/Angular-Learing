import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
  standalone: true,
})
export class CountryCodePipe implements PipeTransform {
  // THIS IS BY DEFAULT CODE
  // transform(value: number, ...args: unknown[]): unknown {

  // THIS IS WHEN WE WANT TO ADD SPECIFIC ARGUMNET IN THE PIPE
  transform(value: number, country?: string): unknown {
    let code = '+91';
    if (country === 'USA') {
      return code = '+1-' + value;
    } else {
      return '+91-' + value;
    }
  }
}

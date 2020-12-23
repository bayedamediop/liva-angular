import { Pipe, PipeTransform } from '@angular/core';
import {ServicesService} from '../services.service';

@Pipe({
  name: 'separator'
})
export class SeparatorPipe implements PipeTransform {
  constructor(private service: ServicesService) {
  }

  transform(value: number, sep: string): string {
    return this.service.separateur(value, sep);
  }

}

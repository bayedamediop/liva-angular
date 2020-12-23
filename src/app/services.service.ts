import { Injectable } from '@angular/core';
// insectable c' est a dire le service est peut insecte un autre service
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  separateur(nbr: number, sep: string): any{
    let nombre: string = nbr.toString();
    const reg = /(\d+)(\d{3})/;
    while (reg.test(nombre)) {
      nombre = nombre.replace(reg, '$1' + sep + '$2');
    }
    return nombre;
  }
}

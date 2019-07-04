import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(values: any[], args?: any): any {
    return values.filter((item)=> item.DatosPersonales.nombre);
  }

}

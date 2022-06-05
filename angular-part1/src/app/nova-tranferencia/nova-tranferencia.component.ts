import { Component } from '@angular/core';

@Component({
    selector:'app-nova-tranferencia',
    templateUrl:'./nova-tranferencia.component.html',
    styleUrls:['./nova-tranferencia.component.scss']

})

export class novaTranferenciaComponent{

  valor: number = 0 ;
  destino: number = 0;

  tranferir(): void{
    console.log("✔ Solicitado nova tranferencia!");
    console.log('Valor: ', this.valor);
    console.log('Destino: ', this.destino);
  }
}



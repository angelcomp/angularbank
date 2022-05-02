import { Transferencia } from './../models/transferencia.model';
import { Component, EventEmitter, Output } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService) {}

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmit: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adicionar(valorEmit).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos;
      },
      (error) => console.error(error)
    );
  }

  limparCampos() {
    this.valor = null;
    this.destino = null;
  }
}

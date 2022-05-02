import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit } from '@angular/core';
import { Transferencia } from 'src/app/models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  listaTransferencias: any[];

  constructor(private service: TransferenciaService) {}

  ngOnInit() {
    this.service.getLista().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.listaTransferencias = transferencias;
    });
  }
}

import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  listaTransferencias: any[];

  constructor(private service: TransferenciaService) {}

  ngOnInit() {
    this.listaTransferencias = this.service.transferencias;
  }
}

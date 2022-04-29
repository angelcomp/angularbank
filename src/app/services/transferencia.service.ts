import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencias = [];

  constructor() {
    this.listaTransferencias = [];
  }

  get transferencias() {
    return this.listaTransferencias;
  }

  adicionar(transferencia: any) {
    this.tratarDados(transferencia);
    this.listaTransferencias.push(transferencia);
  }

  private tratarDados(transferencia: any) {
    transferencia.data = new Date();
  }
}

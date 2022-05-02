import { Transferencia } from '../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencias = [];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = [];
  }

  get transferencias() {
    return this.listaTransferencias;
  }

  getLista(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: any): Observable<Transferencia> {
    this.tratarDados(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private tratarDados(transferencia: any) {
    transferencia.data = new Date();
  }
}

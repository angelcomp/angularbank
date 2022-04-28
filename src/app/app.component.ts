import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularbank';
  transferencias: any[] = [];

  transferir($event) {
    console.log($event);
    const transf = { ...$event, data: new Date() };
    this.transferencias.push(transf);
  }
}

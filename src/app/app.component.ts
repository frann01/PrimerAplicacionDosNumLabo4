import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';

  num1="";
  num2="";
  suma:number=0;

  Calcular()
  {
    this.suma = parseInt(this.num1) + parseInt(this.num2);
  }

  Limpiar()
  {
    this.num1="";
    this.num2="";
    this.suma=0;
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Programa';

  //Criando os métodos de redirecionamento
  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }
  Add(){
    this.router.navigate(["add"]);
  }

}

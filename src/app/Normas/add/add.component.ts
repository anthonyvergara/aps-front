import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Norma } from 'src/app/Modelo/Norma';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  norma:Norma = new Norma();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  Add(){
    this.service.addNorma(this.norma)
    .subscribe(data=>{
      alert("Norma adicionada!");
      this.router.navigate(["listar"]);
    })
  }

}

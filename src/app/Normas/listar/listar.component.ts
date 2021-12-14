import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service'; 
import { Norma } from 'src/app/Modelo/Norma';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  normas:Norma[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getNormas()
    .subscribe(data=>{
      this.normas=data;
    })
  }

}

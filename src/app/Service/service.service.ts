import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Norma } from '../Modelo/Norma';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
// Envia requisição para comunicação com o banco!

  constructor(private http:HttpClient) { }
  Url='/Projeto01/normas';

  getNormas(){
    return this.http.get<Norma[]>(this.Url);
  }
  addNorma(norma:Norma){
    return this.http.post<Norma>(this.Url,norma);
  }
}

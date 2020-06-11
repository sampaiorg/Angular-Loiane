import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCusros(){
    return ['S Curso 1', 'S Curso 2', 'S Curso 3'];
  }
  
}

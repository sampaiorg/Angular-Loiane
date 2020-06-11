import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[];

  constructor() {
    this.nomePortal = 'https://www.google.com';

    this.cursos = ['Mecânica', 'Elétrica', 'Serralheria'];

   }

  ngOnInit(): void {
  }

}

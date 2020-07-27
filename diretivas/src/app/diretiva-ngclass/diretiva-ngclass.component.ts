import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {

  corIcone = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.corIcone = !this.corIcone;
  }

}

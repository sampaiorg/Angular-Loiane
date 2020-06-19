import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  constructor() { }

  incrementa(){
    this.valor++;
    this.mudouValor.emit({numero: this.valor});
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({numero: this.valor});
  }

  ngOnInit(): void {
  }

}

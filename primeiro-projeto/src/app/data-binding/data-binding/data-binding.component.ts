import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'www.google.com';

  urlImage: string = 'http://lorempixel.com/400/200/';

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: Boolean = false;

  nomeCurso: string = 'Angular 2';

  name: string = 'teste';

  // Declaração do Objeto:
  pessoa: any = {
    nome: 'abc',
    idade: 10
  }

  getNumber(){
    return 1;
  }

  cursoAngular: Boolean = true;

  getCursoAngular(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

  botaoClique(){
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string){
   this.valorSalvo = valor;
  }

  onMouseOut(){
    this.isMouseOver = !this.isMouseOver;
    
  }

  onMudouValor(evento){
    console.log(evento.numero);
    // Comentário teste Git
  }

}

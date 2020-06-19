import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nome-curso',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.css']
})
export class InputPropertiesComponent implements OnInit {

  @Input() nome: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

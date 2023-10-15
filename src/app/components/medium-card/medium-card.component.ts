import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medium-card',
  templateUrl: './medium-card.component.html',
  styleUrls: ['./medium-card.component.css']
})
export class MediumCardComponent implements OnInit {

  // Decorator para permitir que o pai insira a informação ao chamar o componente
  @Input()
  photoCover: string = "";

  @Input()
  cardTitle: string = "";
  @Input()
  cardDescription: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}

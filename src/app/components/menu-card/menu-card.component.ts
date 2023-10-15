import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {

  @Input()
  cardTitle: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}

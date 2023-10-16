import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-card',
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.css']
})
export class TextCardComponent implements OnInit {

  @Input()
  cardTitle: string = "";
  @Input()
  cardDescription: string = "";
  @Input()
  newsId: string = "0";

  constructor() { }

  ngOnInit(): void {
  }

}

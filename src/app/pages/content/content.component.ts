import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = "https://proxy.olhardigital.com.br/wp-content/uploads/2022/07/one-piece-1024x576.jpg";
  contentTitle: string = "Notítica de exemplo";
  contentDescription: string = "Descrição de exemplo";

  constructor() { }

  ngOnInit(): void {
  }

}

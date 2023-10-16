import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = "https://proxy.olhardigital.com.br/wp-content/uploads/2022/07/one-piece-1024x576.jpg";
  contentTitle: string = "Notítica de exemplo";
  contentDescription: string = "Descrição de exemplo";

  // Adiciona parâmetro para gerenciar rotas no método construtor do componente
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    // Ao iniciar componente, pega a rota que redirecionou para esta página e imprime o id passado da rota no console
    this.route.paramMap.subscribe( value => console.log(value.get("id")))
  }

}

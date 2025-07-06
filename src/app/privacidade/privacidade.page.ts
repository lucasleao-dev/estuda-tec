import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacidade',
  templateUrl: './privacidade.page.html',
  styleUrls: ['./privacidade.page.scss'],
})
export class PrivacidadePage implements OnInit {

  constructor() { }

  ngOnInit() { }

  // Função para imprimir o conteúdo da Política de Privacidade
  printPolicy() {
    window.print(); // Abre a janela de impressão do navegador
  }
}

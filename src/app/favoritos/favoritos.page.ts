import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  favoritos: Array<{ title: string; description: string }> = [];

  constructor() {}

  ngOnInit() {
    // Exemplo de dados para os favoritos
    this.favoritos = [
      { title: 'Artigo sobre Ionic', description: 'Um guia completo sobre o framework Ionic' },
      { title: 'Curso Angular', description: 'Curso avançado de Angular para desenvolvimento web' },
      { title: 'Tutorial TypeScript', description: 'Aprenda TypeScript do básico ao avançado' }
    ];
  }

  // Método que será chamado ao clicar no botão
  openMenu() {
    // Lógica para abrir o menu (pode ser um menu lateral, modal, etc.)
    console.log("Menu aberto!"); // Exemplo de lógica
    // Aqui você pode adicionar a lógica para abrir um menu ou qualquer outra ação desejada
  }
}

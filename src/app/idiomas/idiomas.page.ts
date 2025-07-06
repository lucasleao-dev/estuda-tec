import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.page.html',
  styleUrls: ['./idiomas.page.scss'],
})
export class IdiomasPage implements OnInit {
  selectedLanguage: string = 'pt'; // Define um idioma padrão

  constructor() { }

  ngOnInit() { }

  selectLanguage(language: string) {
    this.selectedLanguage = language; // Atualiza o idioma selecionado
  }

  confirmSelection() {
    console.log('Idioma selecionado:', this.selectedLanguage);
    // Aqui você pode adicionar lógica para lidar com a seleção do idioma
  }
}

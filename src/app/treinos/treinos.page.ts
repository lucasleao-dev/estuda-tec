import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treinos',
  templateUrl: './treinos.page.html',
  styleUrls: ['./treinos.page.scss'],
})
export class TreinosPage implements OnInit {
  // Lista completa de treinos
  treinos = [
    {
      id: 1,
      title: 'Membros Superiores',
      subtitle: 'Treino para braços, ombros e costas',
      description: 'Exercícios focados em fortalecer e tonificar os membros superiores.',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID'
    },
    {
      id: 2,
      title: 'Membros Inferiores',
      subtitle: 'Treino para pernas e glúteos',
      description: 'Exercícios para fortalecimento e definição dos membros inferiores.',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID'
    },
    {
      id: 3,
      title: 'Cardio',
      subtitle: 'Vídeo de treino cardio',
      description: 'Veja um exemplo de treino cardio para melhorar sua resistência cardiovascular.',
      videoUrl: 'https://www.youtube.com/embed/YOUTUBE_VIDEO_ID'
    },
    {
      id: 4,
      title: 'Treino Abdominal',
      subtitle: 'Vídeo de treino abdominal',
      description: 'Assista a um treino específico para fortalecer seus músculos abdominais.',
      videoUrl: 'https://www.youtube.com/embed/YOUTUBE_VIDEO_ID'
    }
  ];

  // Lista que será exibida, com base no filtro
  filteredTreinos = [...this.treinos];

  constructor() { }

  ngOnInit() { }

  // Função de filtragem
  onSearch(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm) {
      this.filteredTreinos = this.treinos.filter((treino) =>
        treino.title.toLowerCase().includes(searchTerm) ||
        treino.subtitle.toLowerCase().includes(searchTerm) ||
        treino.description.toLowerCase().includes(searchTerm)
      );
    } else {
      this.filteredTreinos = [...this.treinos];
    }
  }
}

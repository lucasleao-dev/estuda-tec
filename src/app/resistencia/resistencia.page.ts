import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.page.html',
  styleUrls: ['./resistencia.page.scss'],
})
export class ResistenciaPage implements OnInit {

  duration: number = 0;
  intensity: string = '';
  exercises: string = '';

  constructor() { }

  ngOnInit() {
    // Inicializar variáveis ou lógica se necessário
  }

  startWorkout() {
    // Lógica para iniciar o treino
  }

  stopWorkout() {
    // Lógica para parar o treino
  }
}

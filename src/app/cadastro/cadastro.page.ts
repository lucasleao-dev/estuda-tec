import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  name!: string;
  email!: string;
  password!: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register() {
    // Implementar lógica para enviar dados de cadastro para o backend
    // Neste exemplo simples, redirecionamos para a página de login após o cadastro
    this.router.navigate(['/login']);
  }
}

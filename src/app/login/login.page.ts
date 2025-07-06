import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username!: string;
  password!: string;

  constructor(private router: Router) {}

  login() {
    // Simulação de autenticação básica (substitua com sua lógica real)
    if (this.username === 'usuario' && this.password === 'senha') {
      // Redirecionar para a página inicial após o login
      this.router.navigate(['/home']);
    } else {
      // Exibir mensagem de erro ou feedback de login inválido
      console.log('Credenciais inválidas');
    }
  }
}

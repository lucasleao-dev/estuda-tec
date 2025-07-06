import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Importa o AlertController

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) { } // Injeta o Router e o AlertController

  ngOnInit() {
    // Lógica de inicialização se necessário
  }

  openProfileSettings() {
    this.router.navigate(['/profile-settings']); // Navega para a página de configurações de perfil
  }

  openLanguageSettings() {
    this.router.navigate(['/idiomas']); // Navega para a página de idiomas
  }

  openNotificationSettings() {
    this.router.navigate(['/notification-settings']); // Navega para a página de notificações
  }

  openPrivacySettings() {
    this.router.navigate(['/privacy-settings']); // Navega para a página de privacidade
  }

  openAbout() {
    this.router.navigate(['/about']); // Navega para a página sobre
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: 'Tem certeza que deseja sair?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Usuário cancelou o logout');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            // Aqui você pode adicionar a lógica para efetuar o logout
            this.router.navigate(['/login']); // Redireciona para a página de login
          }
        }
      ]
    });

    await alert.present();
  }
}

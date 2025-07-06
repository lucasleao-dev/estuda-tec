import { Component, ViewChild } from '@angular/core';
import { IonMenu, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonMenu, { static: false }) menu: IonMenu | undefined;

  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favoritos', url: '/favoritos', icon: 'heart' },
    { title: 'Idiomas', url: '/idiomas', icon: 'globe' },
    { title: 'Configurações', url: '/configuracoes', icon: 'settings' },
    { title: 'Sair', url: '/login', icon: 'log-out' },
  ];

  constructor(private router: Router, private alertController: AlertController) {}

  // Método para exibir alerta básico de confirmação antes do logout
  async confirmLogout(url: string) {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Deseja realmente sair?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.menu?.close(); // Fecha o menu sem redirecionar
          },
        },
        {
          text: 'Sair',
          handler: () => {
            this.router.navigateByUrl(url);
            this.menu?.close(); // Fecha o menu após redirecionar
          },
        },
      ],
    });

    await alert.present();
  }

  // Método para navegação
  navigate(url: string) {
    if (url === '/login') {
      this.confirmLogout(url); // Chama o alerta de confirmação para o logout
    } else {
      this.router.navigateByUrl(url);
      this.menu?.close();
    }
  }
}

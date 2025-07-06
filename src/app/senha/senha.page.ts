import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-senha',
  templateUrl: './senha.page.html',
  styleUrls: ['./senha.page.scss'],
})
export class SenhaPage implements OnInit {
  email: string = '';

  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  async recuperarSenha() {
    if (!this.email) {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Por favor, insira um e-mail válido.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    // Lógica para recuperação de senha (API ou serviço)
    const alert = await this.alertController.create({
      header: 'Sucesso',
      message: 'Um link de recuperação foi enviado para o seu e-mail.',
      buttons: ['OK'],
    });
    await alert.present();
  }
}

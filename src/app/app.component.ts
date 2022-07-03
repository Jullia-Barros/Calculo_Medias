import { Component, VERSION } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nome: string;
  AGH: string;
  AC: string;
  AT: string;
  media: number;
  FinalMedia: number;

  constructor(
    public toastController: ToastController,
    public alertController: AlertController
  ) {}

  async exibirToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 10000,
      color: 'success',
    });
    toast.present();
  }

  async verNotas() {
    const alert = await this.alertController.create({
      header: 'Digite as Notas',
      inputs: [
        {
          name: 'inputNome',
          type: 'text',
          placeholder: 'Digite seu nome',
        },

        {
          name: 'inputAGH',
          type: 'number',
          placeholder: 'provaAGH',
          max: 500,
          min: 0,
        },

        {
          name: 'inputAC',
          type: 'number',
          placeholder: 'provaAC',
          max: 500,
          min: 0,
        },

        {
          name: 'inputAT',
          type: 'number',
          placeholder: 'provaAT',
          max: 500,
          min: 0,
        },
      ],

      buttons: [
        {
          text: 'Ok',
          handler: (valor: any) => {
            this.nome = valor['inputNome'];
            this.AGH = valor['inputAGH'];
            this.AC = valor['inputAC'];
            this.AT = valor['inputAT'];
            this.media =
              parseFloat(this.AGH) +
              parseFloat(this.AC) * 2 +
              parseFloat(this.AT) * 7;

            this.FinalMedia = this.media / 10;

            this.exibirToast(
              `Nome: ${this.nome} | Prova AGH: ${this.AGH} | Prova AT: ${this.AC} | Prova AC: ${this.AT} | Media: ${this.FinalMedia}`
            );
          },
        },
      ],
    });
    await alert.present();
  }
}

import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private alertController: AlertController) {}

  async presentCancelAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmar cancelación',
      message: '¿Estás seguro de que deseas cancelar el viaje?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Aceptar',
          handler: () => {
            // Aquí puedes manejar la acción de cancelar el viaje
            console.log('Viaje cancelado');
          },
        },
      ],
    });

    await alert.present();
  }

  async presentConfirmAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmar viaje',
      message: '¿Estás seguro de que deseas confirmar el viaje?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Aceptar',
          handler: () => {
            // Aquí puedes manejar la acción de confirmar el viaje
            console.log('Viaje confirmado');
          },
        },
      ],
    });

    await alert.present();
  }
}
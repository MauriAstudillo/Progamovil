import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  mensaje: string = '';
  usr: Usuario = {
    username: '',
    password: '',
    nombre: '',
    apellido: ''
  };

  constructor(
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  ngOnInit() { }

  registrar() {
    if (!this.usr.username || !this.usr.password || !this.usr.nombre || !this.usr.apellido) {
      this.presentToast('top', 'Todos los campos son obligatorios');
      return;
    }

    const usuarioExistente = localStorage.getItem(this.usr.username);

    if (usuarioExistente === null) {
      localStorage.setItem(this.usr.username, JSON.stringify(this.usr));
      this.presentAlert();  
    } else {
      this.presentToast('top', 'Usuario ya existente');
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Usuario Registrado',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.router.navigate(['/login']);
        }
      }],
    });
    await alert.present();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      header: 'ERROR',
      message: message,
      duration: 2500,
      position: position,
    });
    await toast.present();
  }
}
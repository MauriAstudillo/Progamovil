import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usr: Usuario = {
    username: '',
    password: '',
    nombre: '',
    apellido: ''
  };

  constructor(
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() { }

  onSubmit() {
    const usuarioData = localStorage.getItem(this.usr.username);

    if (usuarioData) {
      const usuarioBuscado: Usuario = JSON.parse(usuarioData);

      if (usuarioBuscado.password === this.usr.password) {
        localStorage.setItem('loggedInUser', this.usr.username);

        this.router.navigate(['/tabs/tab3']);
      } else {
        this.presentToast('top');
      }
    } else {
      this.presentToast('top');
    }
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      header: 'ERROR',
      message: 'Usuario y/o Contraseña incorrecta!!!',
      duration: 2500,
      position: position,
    });
    await toast.present();
  }
}
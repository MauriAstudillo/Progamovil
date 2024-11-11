import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { ToastController } from '@ionic/angular';

interface Auto {
  modelo: string;
  anio: number;
  patente: string;
  disponibilidad: boolean;
}

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  usuario: Usuario = {
    username: '',
    password: '',
    nombre: '',
    apellido: ''
  };

  auto: Auto = {
    modelo: '',
    anio: new Date().getFullYear(),
    patente: '',
    disponibilidad: false
  };

  loggedInUser: string; 

  constructor(private toastController: ToastController) { }

  ngOnInit() {
    this.loggedInUser = localStorage.getItem('loggedInUser'); 
    this.cargarDatos();
  }

  cargarDatos() {
    if (this.loggedInUser) {
     
      const usuarioData = localStorage.getItem(this.loggedInUser);
      if (usuarioData) {
        this.usuario = JSON.parse(usuarioData);
      }

      const autoData = localStorage.getItem(`${this.loggedInUser}-auto`);
      if (autoData) {
        this.auto = JSON.parse(autoData);
      }
    } else {
      console.log('No hay usuario logueado');
    }
  }

  guardarDatos() {
    if (this.loggedInUser) {
      
      localStorage.setItem(this.loggedInUser, JSON.stringify(this.usuario));
      localStorage.setItem(`${this.loggedInUser}-auto`, JSON.stringify(this.auto));
      this.presentToast('Datos guardados correctamente', 'bottom');
    } else {
      this.presentToast('No hay usuario logueado', 'top');
    }
  }

  async presentToast(message: string, position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: position
    });
    await toast.present();
  }
}
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { ServiciodbService } from '../services/serviciodb.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  mensaje:string=''
  usr:Usuario={
    username:'',
    password:'',
    nombre:'',
    apellido:''
  }

  constructor(private db:ServiciodbService,
    private router:Router,
    private alertController:AlertController,
    private toastController:ToastController
    ) { }

  ngOnInit() {
  }

  registrar(){
    let buscado=this.db.leer(this.usr.username);
    buscado.then(usuarioBuscado=>{
      if(usuarioBuscado===null){
        this.db.guardar(this.usr.username,this.usr);
        this.presentAlert();
      }
      else{
        console.log("EL usuario ya existe");
        this.presentToast('top');
      }
    })

    
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Usuario Registrado ',
      buttons: [{
        text:'Aceptar',
        handler:()=>{
          this.router.navigate(['/login']);
        }
      }],
    });

    await alert.present();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      header:'ERROR',
      message: 'Usuario ya existente',
      duration: 2500,
      position: position,
    });

    await toast.present();
  }
}

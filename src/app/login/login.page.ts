import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServiciodbService } from '../services/serviciodb.service';
import { IonicStorageModule } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  usr:Usuario={
    username:'',
    password:'',
    nombre:'',
    apellido:''
    }

    constructor(private router:Router,
      private toastController:ToastController,
      private db:ServiciodbService) { }

  ngOnInit() {
  }

  onSubmit(){
    let buscado=this.db.leer(this.usr.username);
    buscado.then(usuarioBuscado=>{
      if(usuarioBuscado!==null){
        this.router.navigate(['/tabs/tab3']);
      }
      else{
       this.presentToast('top');
      }
    })

    
  }
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      header:'ERROR',
      message: 'Usuario y/o Contraseña incorrecta!!!',
      duration: 2500,
      position: position,
    });

    await toast.present();
  }

}

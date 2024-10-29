import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  mensaje:string=''
  usr:Usuario={
    username:'',
    password:'',
    nombre:'',
    apellido:''
  }


  constructor(private router:Router) {}

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.usr);
    if(this.usr.username=="Markinho" && this.usr.password=="123"){
      console.log("Acceso ok");
      this.router.navigate(['/perfil'])
    }
    else{
      this.mensaje='Acceso Denegado'
    }
  }

 

}

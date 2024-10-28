import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor() { 
    addIcons({ add });
  }

  ngOnInit() {
  }

}

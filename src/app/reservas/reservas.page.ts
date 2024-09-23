import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {  
  public alertButtons = [
  {
    text: 'Confirmar',
    role: 'confirm',
    handler: () => {
      console.log('Reserva Confirmada');
  },
},
{
  text: 'Cancelar',
  role: 'cancel',
  handler: () => {
    console.log('Reserva Cancelada');
},
},


  
  
  
  ];
  constructor() { }

  ngOnInit() {
  }

}

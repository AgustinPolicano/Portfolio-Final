import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/models/models';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss'],
})
export class ProyectosComponent implements OnInit {
  proyectos!: Proyectos[];
  constructor() {
    this.proyectos = [
      {
        title: 'Nahuel P2P',
        subtitle: 'Exchange de Cryptomonedas',
        link: 'https://nminp2p.web.app/',
        button: 'MÁS DETALLES',
        bg: '../../../assets/img/btcfondo.webp'
      },
      {
        title: 'Exchange PP',
        subtitle: 'Exchange de Divisas',
        link: 'https://pdrazr.com/',
        button: 'MÁS DETALLES',
        bg: '../../../assets/img/exchange-fondo.webp'
      },
      {
        title: 'Nft Royale',
        subtitle: 'Juego Basado en la Blockchain',
        link: 'https://nftroyale.net/',
        button: 'MÁS DETALLES',
        bg: '../../../assets/img/background-nft.webp'
      },
    ];
  }

  ngOnInit() {}
}

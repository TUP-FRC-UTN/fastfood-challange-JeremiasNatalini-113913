import { Component, OnInit } from '@angular/core';
import {Venta} from '../models/venta.interface';
import { VentaService } from '../services/venta.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {
  pedidoPendiente : Venta[] = [];
  pedidoCoccion : Venta[] = [];

  constructor(private ventaService: VentaService) {
    this.pedidoPendiente = this.ventaService.obtenerVentas();
  }

  cocinar(id: number) {
    if (this.pedidoCoccion.length > 0) {
      return;
    }

    const pedido = this.pedidoPendiente.find(pedido => pedido.id === id);
    if (pedido) {
      this.pedidoCoccion.push(pedido);
      this.pedidoPendiente = this.pedidoPendiente.filter(pedido => pedido.id !== id);
    }

  }

  ngOnInit(): void {

  }



}

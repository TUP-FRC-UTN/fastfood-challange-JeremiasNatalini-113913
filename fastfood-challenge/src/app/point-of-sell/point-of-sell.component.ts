import { Component } from '@angular/core';
import { Venta } from '../models/venta.interface';
import { VentaService } from '../services/venta.service';


@Component({
  selector: 'app-point-of-sell',
  standalone: true,
  imports: [],
  templateUrl: './point-of-sell.component.html',
  styleUrl: './point-of-sell.component.css'
})
export class PointOfSellComponent {
  venta: Venta[] = [];

  constructor (private ventaService: VentaService) {
    this.venta = this.ventaService.obtenerVentas();
  }

  ngOnInit(): void {
  }

  agregarVenta(nombre: string, pedido: string) {
    var venta: Venta = {
      id: Math.floor(Math.random() * 1000),
      nombre: nombre,
      pedido: pedido
    }
    this.ventaService.agregarVenta(venta);
  }




}

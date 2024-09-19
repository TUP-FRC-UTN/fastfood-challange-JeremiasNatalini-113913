import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PointOfSellComponent } from './point-of-sell/point-of-sell.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RestaurantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fastfood-challenge';
}

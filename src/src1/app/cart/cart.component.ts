import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

myCart2!: string | null;
myCart3 = []

  getCart():void{
    this.myCart3 = JSON.parse(localStorage.getItem('Choosen') || '{}');
    console.log(this.myCart3)
  }
}

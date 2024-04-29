import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartService = inject(CartService);

  deleteFromCart(item: any){
    this.cartService.delete(item);
  }

}




// myCart2!: string | null
// myCart3!: object[] | null
// getCart():void{

//   this.myCart2 = localStorage.getItem('Choosen')
//   console.log(this.myCart2)
// }
// }
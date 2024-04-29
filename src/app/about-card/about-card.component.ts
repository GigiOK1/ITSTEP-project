import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardservService } from '../services/cardserv.service';
import { productCard } from '../cards';
import { CardComponent } from '../card/card.component';
import { NgIf } from '@angular/common';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-about-card',
  standalone: true,
  imports: [CommonModule, CardComponent,NgIf],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.css'
})
export class AboutCardComponent {

  cartService = inject(CartService);
  addToCart(product: any){
    this.cartService.addToCart(product);
  }

  route: ActivatedRoute = inject(ActivatedRoute)

  CardService = inject(CardservService)
  CardCard: productCard | undefined

  constructor(){

    const CardId = Number(this.route.snapshot.params['id']);

    this.CardService.getAllCardsById(CardId).then(Card=>{
      this.CardCard = Card
    })

  }

}

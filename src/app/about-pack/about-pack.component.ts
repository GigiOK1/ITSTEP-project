import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PackservService } from '../services/packserv.service';
import { productPack } from '../packs';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { PacksComponent } from '../packs/packs.component';
@Component({
  selector: 'app-about-pack',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './about-pack.component.html',
  styleUrl: './about-pack.component.css',
})
export class AboutPackComponent {
  cartService = inject(CartService);
  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  route: ActivatedRoute = inject(ActivatedRoute);

  PackService = inject(PackservService);
  PackCard: productPack | undefined;

  constructor() {
    const PackId = Number(this.route.snapshot.params['id']);

    this.PackService.getAllPacksById(PackId).then((Pack) => {
      this.PackCard = Pack;
    });
  }
}

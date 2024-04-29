import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardservService } from '../services/cardserv.service';
import { productCard } from '../cards';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [NgFor, CardComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css',
})
export class BrowseComponent {
  CardList: productCard[] = [];
  CardService: CardservService = inject(CardservService);
  filteredCardList: productCard[] = [];

  constructor() {
    // this.godList = this.godService.getAllGods()
    // this.filteredGodList = this.godList;

    this.CardService.getAllCards().then((CardList: productCard[]) => {
      this.CardList = CardList;
      this.filteredCardList = CardList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredCardList = this.CardList;
      return;
    }
    this.filteredCardList = this.CardList.filter((Card) =>
      Card?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  ganresCount: string = 'All';
  categoriesChanged(data: string) {
    this.ganresCount = data;
  }
  
  onCategoryChange(data:string) {
    if (data == 'all') {
      this.filteredCardList = this.CardList;
      return;
    }
    this.filteredCardList = this.CardList.filter(
      Card => Card?.detailCat == data
    );

};
}

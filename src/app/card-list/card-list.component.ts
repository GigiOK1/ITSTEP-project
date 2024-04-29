import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { NgFor, NgIf } from '@angular/common';
import { productCard } from '../cards';
import { CardservService } from '../services/cardserv.service';
@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent, RouterOutlet, NgFor, NgIf],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
})
export class CardListComponent {

  // cardService: CardservService = inject(CardservService);
  // CardList: productCard[] = [];
  // filteredCardList: productCard[] = [];

  // constructor() {

  //   this.cardService.getAllCards().then((CardList:productCard[]) => {
  //     this.CardList = CardList;
  //   });

  // }

  // filterResults(text: string) {
  //   if (!text) {
  //     this.filteredCardList = this.CardList;
  //     return;
  //   }

  //   this.filteredCardList = this.CardList.filter((productCard) =>
  //     productCard?.name.toLowerCase().includes(text.toLowerCase())
  //   );
  // }
  CardList:productCard[] = []
  CardService: CardservService = inject(CardservService)
  filteredCardList: productCard[] = [];

  constructor(){

    // this.godList = this.godService.getAllGods()
    // this.filteredGodList = this.godList;

    this.CardService.getAllCards().then((CardList:productCard[])=>{
      this.CardList = CardList
      this.filteredCardList = CardList;
    })


  }

  filterResults(text: string) {
    if (!text) {
      this.filteredCardList = this.CardList;
      return;
    }
    this.filteredCardList = this.CardList.filter(
      Card => Card?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  ganresCount:string ='all'
    categoriesChanged(data:string){
        this.ganresCount = data
    }
  onCategoryChange(data:string){
    this.filteredCardList = this.CardList.filter(
      Card => Card?.category == data
    )

}}
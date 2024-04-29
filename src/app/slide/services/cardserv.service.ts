import { Injectable } from '@angular/core';

import { productCard } from '../../cards';

@Injectable({
  providedIn: 'root',
})
export class CardservService {
  protected Featuredcards: productCard[] = [
    {
      id: 1,
      name: 'Bicycle standart',
      price: '18.00₾',
      img: 'http://cardshop.ge/wp-content/uploads/2020/06/Bicycle-Standard-00-600x435.jpg',
    },
    {
      id: 2,
      name: 'Aces Red (100% Plastic)',
      price: '55.00₾',
      img: 'http://cardshop.ge/wp-content/uploads/2023/11/ACES-RED-0-600x435.jpg',
    },
    {
      id: 3,
      name: 'BICYCLE JACQUARD',
      price: '34.00₾',
      img: 'http://cardshop.ge/wp-content/uploads/2024/02/JACQUARD-0-600x435.jpg',
    },
    {
      id: 4,
      name: 'SIRIUS-B V4',
      price: '35.00₾',
      img: 'http://cardshop.ge/wp-content/uploads/2023/10/Sirius-B-V4-0-600x435.jpg',
    },
  ];
  constructor() {}

  getAllCards(): productCard[] {
    return this.Featuredcards;
  }

  getAllCardsById(id: Number): productCard | undefined {
    return this.Featuredcards.find((productCard) => productCard.id === id);
  }
}

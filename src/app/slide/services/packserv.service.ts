import { Injectable } from '@angular/core';

import { productPack } from '../../packs';

@Injectable({
  providedIn: 'root',
})
export class PackservService {
  protected packs: productPack[] = [
    {
      id: 100,
      name: '6 DECK + FREE IGNITE',
      list: 'Tally-Ho Viper Fan Back,Tally-Ho Orange Vipe,Virt,Virtuoso Fall/Winter,Bicycle White Ghost,Bicycle Blue Masters Edition,Bicycle Hollywood Red,bicycle ignite',
      img: 'http://cardshop.ge/wp-content/uploads/2020/04/Free-Ignite-1-1.jpg?id=10750',
      price: '119.99₾',
    },
    {
      id: 101,
      name: '3 Decks + Free bycicle Standart',
      list: 'Ellusionist Absinthe,2x Bycicle Classic (Red & Blue),Killer Bee',
      img: 'http://cardshop.ge/wp-content/uploads/2020/03/Free-Bicycle-scaled.jpg?id=10542',
      price: '79.99₾',
    },
  ];
  constructor() {}

  getAllPacks(): productPack[] {
    return this.packs;
  }

  getAllPacksById(id: Number): productPack | undefined {
    return this.packs.find((productPack) => productPack.id === id);
  }
}

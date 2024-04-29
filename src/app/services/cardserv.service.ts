import { Injectable } from '@angular/core';

import { productCard } from '../cards';

@Injectable({
  providedIn: 'root',
})
export class CardservService {
  url = 'https://662bd662de35f91de159a037.mockapi.io/Cards/cards';

  constructor() {}

  async getAllCards(): Promise<productCard[]> {
    const response = await fetch(this.url);
    return (await response.json()) ?? [];
  }
  async getAllCardsById(id: Number): Promise<productCard | undefined> {
    const response = await fetch(`${this.url}/${id}`);
    return (await response.json()) ?? {};
  }
}
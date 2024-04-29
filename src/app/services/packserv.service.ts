import { Injectable } from '@angular/core';

import { productPack } from '../packs';

@Injectable({
  providedIn: 'root',
})
export class PackservService {


  url = 'https://662bd662de35f91de159a037.mockapi.io/Cards/Packs';

  constructor() {}

  async getAllPacks(): Promise<productPack[]> {
    const response = await fetch(this.url);
    return (await response.json()) ?? [];
  }
  async getAllPacksById(id: Number): Promise<productPack | undefined> {
    const response = await fetch(`${this.url}/${id}`);
    return (await response.json()) ?? {};
  }
}




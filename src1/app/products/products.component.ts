import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { GodservService } from '../godserv.service';
import { GodCardComponent } from '../god-card/god-card.component';
import { GodCard } from '../god-card';
import { NgIf } from '@angular/common';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule, NgFor, NgIf, GodCardComponent,CategoriesComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  godList:GodCard[] = []
  godService: GodservService = inject(GodservService)
  filteredGodList: GodCard[] = [];

  constructor(){

    // this.godList = this.godService.getAllGods()
    // this.filteredGodList = this.godList;

    this.godService.getAllGods().then((godList:GodCard[])=>{
      this.godList = godList
      this.filteredGodList = godList;
    })


  }

  filterResults(text: string) {
    if (!text) {
      this.filteredGodList = this.godList;
      return;
    }
    this.filteredGodList = this.godList.filter(
      godCard => godCard?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  onCategoryChange(data:string) {
    if (data == 'all') {
      this.filteredGodList = this.godList;
      return;
    }
    this.filteredGodList = this.godList.filter(
      godCard => godCard?.category == data
    );

};

}

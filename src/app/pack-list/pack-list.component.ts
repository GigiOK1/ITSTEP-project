import { Component, inject } from '@angular/core';
import { productPack } from '../packs';
import { PacksComponent } from '../packs/packs.component';
import { NgFor } from '@angular/common';


import { PackservService } from '../services/packserv.service';
@Component({
  selector: 'app-pack-list',
  standalone: true,
  imports: [PacksComponent, NgFor],
  templateUrl: './pack-list.component.html',
  styleUrl: './pack-list.component.css',
})
export class PackListComponent {
  
  PackList:productPack[] = []
  PackService: PackservService = inject(PackservService)
  filteredPackList: productPack[] = [];

  constructor(){

    this.PackService.getAllPacks().then((PackList:productPack[])=>{
      this.PackList = PackList
      this.filteredPackList = PackList;
    })

  }

  filterResults(text: string) {
    if (!text) {
      this.filteredPackList = this.PackList;
      return;
    }
    this.filteredPackList = this.PackList.filter(
      Pack => Pack?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
  ganresCount:string ='all'
    categoriesChanged(data:string){
        this.ganresCount = data
    }
  
  
}

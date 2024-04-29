import { Component, Input } from '@angular/core';
import { GodCard } from '../god-card';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-god-card',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './god-card.component.html',
  styleUrl: './god-card.component.css'
})
export class GodCardComponent {

  @Input() godCard!:GodCard

  genresCount:string = 'all';

  onCategoryChange(data:string){
    this.genresCount = data;

    console.log(data)
  }


  myCart = ''

  raghaca(btn:any):void{

    this.myCart+=JSON.stringify(btn.godCard)
    this.myCart+=localStorage.getItem('Choosen')
    console.log(localStorage.getItem('Choosen'))
    localStorage.setItem('Choosen', this.myCart)
  }
}

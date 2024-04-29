import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GodservService } from '../godserv.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  choosenCategory:string = 'all'

  @Output()
  onChoose:EventEmitter<string> = new EventEmitter<string>()

  // onCategoryChange(data:string){
  //   this.onChoose.emit(data)
  // }
}

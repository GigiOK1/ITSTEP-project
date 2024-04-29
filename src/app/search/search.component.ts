import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchedWord: string = '';

  @Output()
  searchedTextChange: EventEmitter<string> = new EventEmitter<string>();

  onSearch() {
    this.searchedTextChange.emit(this.searchedWord);
  }
}

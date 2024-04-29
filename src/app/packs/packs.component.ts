import { Component, Input } from '@angular/core';
import { productPack } from '../packs';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-packs',
  standalone: true,
  imports: [RouterLink,NgFor],
  templateUrl: './packs.component.html',
  styleUrl: './packs.component.css',
})
export class PacksComponent {
  @Input() pack!: productPack;
}

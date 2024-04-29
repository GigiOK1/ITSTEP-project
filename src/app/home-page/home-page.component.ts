import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardListComponent } from '../card-list/card-list.component';
import { PacksComponent } from '../packs/packs.component';
import { SlideComponent } from '../slide/slide.component';
import { combineLatest } from 'rxjs';
import { CompaniesComponent } from '../companies/companies.component';
import { MailComponent } from '../mail/mail.component';
import { FooterComponent } from '../footer/footer.component';
import { BottomComponent } from '../bottom/bottom.component';
import { PackListComponent } from '../pack-list/pack-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardComponent,CardListComponent,PacksComponent,SlideComponent,CompaniesComponent,MailComponent,FooterComponent,BottomComponent,PackListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}

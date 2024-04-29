import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodCardComponent } from './god-card.component';

describe('GodCardComponent', () => {
  let component: GodCardComponent;
  let fixture: ComponentFixture<GodCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GodCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GodCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

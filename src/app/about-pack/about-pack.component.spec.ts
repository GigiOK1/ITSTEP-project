import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPackComponent } from './about-pack.component';

describe('AboutPackComponent', () => {
  let component: AboutPackComponent;
  let fixture: ComponentFixture<AboutPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

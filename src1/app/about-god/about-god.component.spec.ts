import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGodComponent } from './about-god.component';

describe('AboutGodComponent', () => {
  let component: AboutGodComponent;
  let fixture: ComponentFixture<AboutGodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutGodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutGodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

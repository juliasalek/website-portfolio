import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyCarouselComponent } from './hobby-carousel.component';

describe('HobbyCarouselComponent', () => {
  let component: HobbyCarouselComponent;
  let fixture: ComponentFixture<HobbyCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbyCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

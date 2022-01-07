import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakingReceipiesComponent } from './baking-receipies.component';

describe('BakingReceipiesComponent', () => {
  let component: BakingReceipiesComponent;
  let fixture: ComponentFixture<BakingReceipiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakingReceipiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BakingReceipiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanicAttacksComponent } from './panic-attacks.component';

describe('PanicAttacksComponent', () => {
  let component: PanicAttacksComponent;
  let fixture: ComponentFixture<PanicAttacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanicAttacksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanicAttacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

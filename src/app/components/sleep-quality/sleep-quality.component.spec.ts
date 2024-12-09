import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepQualityComponent } from './sleep-quality.component';

describe('SleepQualityComponent', () => {
  let component: SleepQualityComponent;
  let fixture: ComponentFixture<SleepQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SleepQualityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SleepQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

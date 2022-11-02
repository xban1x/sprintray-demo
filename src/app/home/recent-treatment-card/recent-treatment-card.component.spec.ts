import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTreatmentCardComponent } from './recent-treatment-card.component';

describe('RecentTreatmentCardComponent', () => {
  let component: RecentTreatmentCardComponent;
  let fixture: ComponentFixture<RecentTreatmentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentTreatmentCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentTreatmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

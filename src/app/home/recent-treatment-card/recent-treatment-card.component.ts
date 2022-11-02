import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-recent-treatment-card',
  templateUrl: './recent-treatment-card.component.html',
  styleUrls: ['./recent-treatment-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentTreatmentCardComponent {
  @Input()
  treatment: any;
}

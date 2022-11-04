import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-treatment-card',
  templateUrl: './treatment-card.component.html',
  styleUrls: ['./treatment-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreatmentCardComponent {
  @Input()
  treatment: any;

  onChipSelected(event: any): void {
    event.currentTarget.blur();
  }
}

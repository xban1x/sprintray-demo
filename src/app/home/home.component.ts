import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ViewSelectSnapshot } from '@ngxs-labs/select-snapshot';
import { HomeService, Treatment } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  @ViewSelectSnapshot(HomeService.treatments) treatments!: Treatment[];
  @ViewSelectSnapshot(HomeService.recent_treatments)
  recent_treatments!: Treatment[];
  @ViewSelectSnapshot(HomeService.selected) selected!: Treatment;
  @ViewSelectSnapshot(HomeService.tags) tags!: string[];

  constructor(public home: HomeService) {}

  ngOnInit(): void {
    this.home.getTreatments();
  }
}

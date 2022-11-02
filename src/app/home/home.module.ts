import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { TreatmentCardComponent } from './treatment-card/treatment-card.component';
import { RecentTreatmentCardComponent } from './recent-treatment-card/recent-treatment-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    TreatmentCardComponent,
    RecentTreatmentCardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatChipsModule,
  ],
})
export class HomeModule {}

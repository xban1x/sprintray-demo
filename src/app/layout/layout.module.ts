import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, BreadcrumbsComponent],
  imports: [
    RouterModule,
    CommonModule,
    NgOptimizedImage,
    MatIconModule,
    MatBadgeModule,
  ],
  exports: [HeaderComponent, BreadcrumbsComponent],
})
export class LayoutModule {}

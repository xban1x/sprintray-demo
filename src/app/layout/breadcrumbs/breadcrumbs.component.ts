import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface Breadcrumb {
  text: string;
  link?: string;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  BREADCRUMBS: Breadcrumb[] = [
    { text: 'Cloud Design', link: 'home' },
    { text: 'Alena George' },
    { text: 'New Treatment', link: 'home' },
  ];
}

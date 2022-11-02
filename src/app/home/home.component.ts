import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  TREATMENTS = [
    {
      tags: ['Occlusal Guards', 'AI Services'],
      image: 'assets/treatments/Night Guard.png',
      name: 'Occlusal Guard',
      turnaround_time: 'From 30 mins',
      price: 'Starting from $25.00',
    },
    {
      tags: ['Dental Models'],
      image: 'assets/treatments/Smile Design.png',
      name: 'Digital Smile Design',
      turnaround_time: '2 Business Days',
      price: '$20.00 Per Tooth',
    },
    {
      tags: ['Dental Models', 'AI Services'],
      image: 'assets/treatments/Bracket Removal.png',
      name: 'Bracket Removal',
      turnaround_time: '1 Business Day',
      price: '$16.00 Per Design',
    },
    {
      tags: ['Surgical Guides'],
      image: 'assets/treatments/Implant Planning and Surgical Guide.png',
      name: 'Implant Planning and Surgical Guide',
      turnaround_time: '2 Business Days',
      price: '$100.00 Per Guide',
    },
    {
      tags: ['Dental Models'],
      image: 'assets/treatments/Models for Clear Aligner Fabrication.png',
      name: 'Models for Clear Aligner Fabrication',
      turnaround_time: '3 Business Days',
      price: '$135',
    },
    {
      tags: ['Surgical Guides', 'Prosthetics'],
      image: 'assets/treatments/Surgical Guide with Temporary Restoration.png',
      name: 'Surgical Guide with Temporary Crown',
      turnaround_time: '3 Business Days',
      price: '$120.00 Per Set',
    },
    {
      tags: ['Dental Models'],
      image:
        'assets/treatments/Models for Custom Bleaching Tray Fabrication.png',
      name: 'Custom Bleaching Tray Model',
      turnaround_time: '2 Business Days',
      price: '$50.00 Per Arch',
    },
    {
      tags: ['Prosthetics'],
      image: 'assets/treatments/Duplicate Denture.png',
      name: 'Copy Dentures',
      turnaround_time: '3 Business Days',
      price: 'Starting from $75.00',
    },
    {
      tags: ['Prosthetics'],
      new: true,
      image: 'assets/treatments/Hybrid-dentures.png',
      name: 'Hybrid Dentures',
      turnaround_time: '3 Business Days',
      price: 'Starting from $300.00',
    },
    {
      tags: ['Prosthetics'],
      image: 'assets/treatments/Crown-bridge.png',
      name: 'Crown and Bridge',
      turnaround_time: 'From 1 Business Day',
      price: 'Starting from $6.00',
    },
  ];
  TAGS = [
    ...new Set(
      this.TREATMENTS.map((treatment) => treatment.tags).flat()
    ).keys(),
  ];
}

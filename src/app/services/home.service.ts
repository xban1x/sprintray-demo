import { Injectable } from '@angular/core';
import { NgxsDataRepository } from '@angular-ru/ngxs/repositories';
import { DataAction, StateRepository } from '@angular-ru/ngxs/decorators';
import { Selector, State, StateToken } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';

export interface Treatment {
  tags: string[];
  image: string;
  name: string;
  turnaround_time: string;
  price: string;
  selected?: boolean;
}

interface HomeStateModel {
  treatments: Treatment[];
  recent_treatments: Treatment[];
  tags: string[];
  selected?: Treatment;
  search?: string;
  filter_tags?: string[];
}

const HOME_STATE_TOKEN = new StateToken<HomeStateModel>('home');

@StateRepository()
@State({
  name: HOME_STATE_TOKEN,
})
@Injectable({
  providedIn: 'root',
})
export class HomeService extends NgxsDataRepository<HomeStateModel> {
  @Selector()
  static treatments(state: HomeStateModel): Treatment[] {
    return state.treatments;
  }

  @Selector()
  static recent_treatments(state: HomeStateModel): Treatment[] | null {
    return state.recent_treatments;
  }

  @Selector()
  static selected(state: HomeStateModel): Treatment | null {
    return state.selected ?? null;
  }

  @Selector()
  static tags(state: HomeStateModel): string[] | null {
    return state.tags ?? null;
  }

  constructor(private http: HttpClient) {
    super();
  }

  @DataAction()
  async getTreatments(): Promise<Treatment[]> {
    const TREATMENTS = [
      {
        tags: ['Occlusal Guards', 'AI Services'],
        image: 'assets/treatments/Night Guard.png',
        name: 'Occlusal Guard',
        turnaround_time: 'From 30 mins',
        price: 'Starting from $25.00',
        selected: false,
      },
      {
        tags: ['Dental Models'],
        image: 'assets/treatments/Smile Design.png',
        name: 'Digital Smile Design',
        turnaround_time: '2 Business Days',
        price: '$20.00 Per Tooth',
        selected: false,
      },
      {
        tags: ['Dental Models', 'AI Services'],
        image: 'assets/treatments/Bracket Removal.png',
        name: 'Bracket Removal',
        turnaround_time: '1 Business Day',
        price: '$16.00 Per Design',
        selected: false,
      },
      {
        tags: ['Surgical Guides'],
        image: 'assets/treatments/Implant Planning and Surgical Guide.png',
        name: 'Implant Planning and Surgical Guide',
        turnaround_time: '2 Business Days',
        price: '$100.00 Per Guide',
        selected: false,
      },
      {
        tags: ['Dental Models'],
        image: 'assets/treatments/Models for Clear Aligner Fabrication.png',
        name: 'Models for Clear Aligner Fabrication',
        turnaround_time: '3 Business Days',
        price: '$135',
        selected: false,
      },
      {
        tags: ['Surgical Guides', 'Prosthetics'],
        image:
          'assets/treatments/Surgical Guide with Temporary Restoration.png',
        name: 'Surgical Guide with Temporary Crown',
        turnaround_time: '3 Business Days',
        price: '$120.00 Per Set',
        selected: false,
      },
      {
        tags: ['Dental Models'],
        image:
          'assets/treatments/Models for Custom Bleaching Tray Fabrication.png',
        name: 'Custom Bleaching Tray Model',
        turnaround_time: '2 Business Days',
        price: '$50.00 Per Arch',
        selected: false,
      },
      {
        tags: ['Prosthetics'],
        image: 'assets/treatments/Duplicate Denture.png',
        name: 'Copy Dentures',
        turnaround_time: '3 Business Days',
        price: 'Starting from $75.00',
        selected: false,
      },
      {
        tags: ['Prosthetics'],
        new: true,
        image: 'assets/treatments/Hybrid-dentures.png',
        name: 'Hybrid Dentures',
        turnaround_time: '3 Business Days',
        price: 'Starting from $300.00',
        selected: false,
      },
      {
        tags: ['Prosthetics'],
        image: 'assets/treatments/Crown-bridge.png',
        name: 'Crown and Bridge',
        turnaround_time: 'From 1 Business Day',
        price: 'Starting from $6.00',
        selected: false,
      },
    ];
    this.patchState({
      treatments: TREATMENTS,
      recent_treatments: TREATMENTS.slice(0, 4),
      tags: [
        ...new Set(TREATMENTS.map((treatment) => treatment.tags).flat()).keys(),
      ],
    });
    return TREATMENTS;
  }

  @DataAction() selectTreatment(treatment: Treatment): void {
    this.patchState({ selected: treatment });
  }
}

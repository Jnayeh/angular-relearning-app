import { Component, OnInit } from '@angular/core';
import { Emploi } from '../../models/emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css'],
})
export class OffresEmploiComponent implements OnInit {
  list: Emploi[] = [];
  nbOffre!: number;
  constructor() {}

  ngOnInit(): void {
    this.list = [
      {
        reference: 'ref1',
        titre: 'titre1',
        entreprise: 'entreprise1',
        etat: true,
      },
      {
        reference: 'ref2',
        titre: 'titre2',
        entreprise: 'entreprise2',
        etat: false,
      },
      {
        reference: 'ref3',
        titre: 'titre3',
        entreprise: 'entreprise3',
        etat: true,
      },
    ];
  }
  calculeBilan() {
    this.nbOffre = 0;
    this.nbOffre = this.list.filter((e) => e.etat).length;
  }
  onchangeEtat(reference: string) {
    this.list.map((emploi) => {
      if (emploi.reference == reference) {
        emploi.etat = !emploi.etat;
      }
    });
  }
}

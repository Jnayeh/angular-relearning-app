import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  titre = 'Les articles du jour';
  articles: Article[] = [];
  allArticles: Article[] = [];
  number!: number;
  constructor() {}
  ngOnInit(): void {
    this.allArticles = [
      {
        titre: 'Le championnat du monde',
        contenu: 'Le champion du monde de cette année est ....',
        auteur: 'Med Taher',
        date: '12/12/2005',
        categorie: 'Sport',
      },
      {
        titre: 'Les nouveaux parents',
        contenu: 'Les nouveaux parents....',
        auteur: 'Ahmed Said',
        date: '11/11/2018',
        categorie: 'Education',
      },
      {
        titre: 'Comment écrire votre CV',
        contenu: 'Pour réussir à décraucher un emploi ',
        auteur: 'Marie Elsa',
        date: '02/04/2017',
        categorie: 'Travail',
      },
      {
        titre: 'Le championnat du monde',
        contenu: 'Le champion du monde de cette année est ....',
        auteur: 'Med Taher',
        date: '12/12/2005',
        categorie: 'Sport',
      },
      {
        titre: 'Les nouveaux parents',
        contenu: 'Les nouveaux parents....',
        auteur: 'Ahmed Said',
        date: '11/11/2018',
        categorie: 'Education',
      },
      {
        titre: 'Comment écrire votre CV',
        contenu: 'Pour réussir à décraucher un emploi ',
        auteur: 'Marie Elsa',
        date: '02/04/2017',
        categorie: 'Travail',
      },
      {
        titre: 'Le championnat du monde',
        contenu: 'Le champion du monde de cette année est ....',
        auteur: 'Med Taher',
        date: '12/12/2005',
        categorie: 'Sport',
      },
      {
        titre: 'Les nouveaux parents',
        contenu: 'Les nouveaux parents....',
        auteur: 'Ahmed Said',
        date: '11/11/2018',
        categorie: 'Education',
      },
      {
        titre: 'Comment écrire votre CV',
        contenu: 'Pour réussir à décraucher un emploi ',
        auteur: 'Marie Elsa',
        date: '02/04/2017',
        categorie: 'Travail',
      },
      {
        titre: 'Le championnat du monde',
        contenu: 'Le champion du monde de cette année est ....',
        auteur: 'Med Taher',
        date: '12/12/2005',
        categorie: 'Sport',
      },
      {
        titre: 'Les nouveaux parents',
        contenu: 'Les nouveaux parents....',
        auteur: 'Ahmed Said',
        date: '11/11/2018',
        categorie: 'Education',
      },
      {
        titre: 'Comment écrire votre CV',
        contenu: 'Pour réussir à décraucher un emploi ',
        auteur: 'Marie Elsa',
        date: '02/04/2017',
        categorie: 'Travail',
      },
    ];
    this.articles = this.allArticles;
    this.number=this.calculateArticleNumber();
  }

  calculateArticleNumber(): number {
    return this.articles.filter((a) => a.categorie != 'Travail').length;
  }
  limitArticleByNumber(number: number) {
    this.articles= this.allArticles.filter((a) => a.categorie != 'Travail').slice(0,number);
  }
}

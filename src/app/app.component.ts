import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Les directives structurelles',
      content: 'Ce sont des directives qui, comme leur nom l\'indique, modifient la structure du document. ' +
        'Dans ce chapitre, vous allez en découvrir deux (il en existe d\'autres) : *ngIf, pour afficher des données de façon ' +
        'conditionnelle, et  *ngFor , pour itérer des données dans un array, par exemple.',
      loveIts: 0,
      date: new Date('2019-01-25 12:43:00')
    },
    {
      title: 'Les directives par attribut',
      content: 'À la différence des directives structurelles, les directives par attribut modifient le comportement d\'un objet ' +
        'déjà existant. Vous avez déjà utilisé une directive de ce type sans le savoir : la directive ngModel que vous avez employée ' +
        'pour le two-way binding',
      loveIts: 0,
      date: new Date('2019-01-27 22:22:00')
    },
    {
      title: 'Pipe async',
      content: 'Le pipe  async  est un cas particulier mais extrêmement utile dans les applications Web, car il permet de gérer des ' +
        'données asynchrones, par exemple des données que l\'application doit récupérer sur un serveur.',
      loveIts: 0,
      date: new Date('2019-01-30 11:31:00')
    }
  ];

  constructor() {}
}

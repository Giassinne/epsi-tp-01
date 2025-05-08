SOLUTIONS.md
📚 Liste des Problèmes et Solutions
1. TODO 1 : Lien dans l'en-tête ne fonctionne pas correctement
Problème : Le lien dans l’en-tête de l’application recharge la page entière.
Solution : Utilisation de la directive routerLink d’Angular pour une navigation sans rechargement de page :

html
Copy
Edit
<a routerLink="/" routerLinkActive="active">
  <span>{{title | formatText}}</span>
</a>
Concept Angular utilisé : routerLink et routerLinkActive.

2. TODO 2 : Mettre la première lettre du titre en majuscule et remplacer les underscores par des espaces
Problème : Le titre affiché dans l’en-tête ne suit pas le format attendu (première lettre majuscule, underscores remplacés par des espaces).
Solution : Création d'un pipe formatText pour formater le titre comme attendu :

typescript
Copy
Edit
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatText'
})
export class FormatTextPipe implements PipeTransform {
  transform(value: string): string {
    return value
      .replace(/_/g, ' ') // Remplacer les underscores par des espaces
      .replace(/\b\w/g, char => char.toUpperCase()); // Mettre la première lettre en majuscule
  }
}
Concept Angular utilisé : Pipe personnalisé.

3. TODO 3 : Les liens de navigation ne fonctionnent pas sans recharger la page
Problème : Les liens de navigation dans le menu ne fonctionnent pas comme prévu.
Solution : Utilisation de routerLink dans les balises <a> pour éviter le rechargement complet de la page :

html
Copy
Edit
<a routerLink="/">Accueil</a>
<a routerLink="/books">Ma Bibliothèque</a>
Concept Angular utilisé : routerLink.

4. TODO 4 : Les pages ne sont pas affichées correctement
Problème : Les pages ne s’affichent pas lors de la navigation.
Solution : Ajout du composant <router-outlet> pour afficher le contenu des pages en fonction de la route :

html
Copy
Edit
<router-outlet></router-outlet>
Concept Angular utilisé : router-outlet pour le rendu dynamique des pages.

5. TODO 6 : Créer un formulaire avec validation pour l'ajout de livre
Problème : Le formulaire pour ajouter un livre ne fonctionne pas et manque de validations.
Solution : Création d’un formulaire réactif avec les validations nécessaires pour chaque champ :

typescript
Copy
Edit
this.bookForm = this.fb.group({
  title: ['', [Validators.required, Validators.maxLength(100)]],
  author: ['', [Validators.required, Validators.maxLength(50)]],
  description: ['', [Validators.required, Validators.maxLength(500)]],
  category: ['', [Validators.required, Validators.maxLength(50)]],
});
Concept Angular utilisé : ReactiveFormsModule, FormBuilder, Validators.

6. TODO 7 : Ajouter des validations pour le formulaire
Problème : Les champs du formulaire manquent de validations pour garantir la saisie correcte des données.
Solution : Ajout des validations required et maxLength pour chaque champ du formulaire. Voir le code de la solution précédente (TODO 6).

7. TODO 8 : Créer un bouton pour revenir à la page précédente
Problème : Il n’y a pas de bouton pour revenir à la page précédente.
Solution : Utilisation de Location pour revenir à la page précédente sans recharger la page :

typescript
Copy
Edit
import { Location } from '@angular/common';
goBack(): void {
  this.location.back();
}
Concept Angular utilisé : Location du package @angular/common.

8. TODO 9 : Corriger l'erreur liée à l'affichage du titre avant sa définition
Problème : Une erreur JavaScript survient lorsqu’on tente d’afficher un titre non défini.
Solution : Utilisation de la syntaxe de navigation sécurisée book?.title pour éviter l'erreur lorsque l’objet n'est pas encore défini :

html
Copy
Edit
<h1>{{ book?.title }}</h1>
Concept Angular utilisé : Safe Navigation Operator (?.).

9. TODO 10 : Appliquer la directive highlight au champ titre
Problème : Le titre du livre n’est pas mis en surbrillance comme prévu.
Solution : Application de la directive highlight sur le champ titre :

html
Copy
Edit
<h2 [appHighlight]="true">{{ book.title }}</h2>
Concept Angular utilisé : Directives personnalisées.

10. TODO 13 : Les données des livres ne s'affichent pas correctement
Problème : Les livres sont récupérés mais ne sont pas affichés dans le composant.
Solution : Vérification de la condition pour afficher les livres et s'assurer que books contient les données :

html
Copy
Edit
<div *ngIf="books && books.length > 0; else noBooks">
  <!-- Affichage des livres -->
</div>
<ng-template #noBooks>
  <p>Aucun livre dans votre bibliothèque. Commencez par en ajouter un!</p>
</ng-template>
Concept Angular utilisé : Structural Directives (*ngIf, ng-template).

11. TODO 14 : Appliquer la directive highlight au titre dans book-list
Problème : Le titre du livre ne bénéficie pas de la mise en surbrillance comme prévu.
Solution : Appliquer la directive highlight sur le titre dans la boucle ngFor :

html
Copy
Edit
<h2 [appHighlight]="book.isFavorite">{{ book.title }}</h2>
Concept Angular utilisé : Directives personnalisées.

12. TODO 15 : Limiter la description du livre à 20 caractères
Problème : La description est trop longue et ne s'arrête pas au bon endroit.
Solution : Création d’un pipe truncateDescription pour limiter le texte :

typescript
Copy
Edit
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateDescription'
})
export class TruncateDescriptionPipe implements PipeTransform {
  transform(value: string, limit: number): string {
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}
Concept Angular utilisé : Pipes personnalisés.

13. TODO 17 : Afficher une alerte après modification du favori
Problème : Aucun retour visuel n’est fait après l’ajout ou la suppression d'un livre dans les favoris.
Solution : Ajouter une alerte pour indiquer le succès ou l’échec de l’opération :

typescript
Copy
Edit
alert(`Le livre "${updatedBook.title}" a été ${updatedBook.isFavorite ? 'ajouté aux favoris' : 'retiré des favoris'}.`);
Concept Angular utilisé : Alertes JavaScript.

14. TODO 18 : Afficher une alerte après suppression du livre
Problème : Aucune alerte n’indique que le livre a été supprimé.
Solution : Ajouter une alerte après la suppression du livre :

typescript
Copy
Edit
alert('Le livre a été supprimé.');
Concept Angular utilisé : Alertes JavaScript.

15. TODO 19 : Afficher une alerte après échec de la suppression du livre
Problème : Aucun retour visuel n’est fait en cas d’échec lors de la suppression d’un livre.
Solution : Ajouter une alerte pour indiquer l’échec de l’opération :

typescript
Copy
Edit
alert('La suppression du livre a échoué.');
Concept Angular utilisé : Alertes JavaScript.

16. TODO 20 : Afficher le titre en majuscules
Problème : Le titre ne s'affiche pas en majuscules comme prévu.
Solution : Utilisation du pipe uppercase d’Angular :

html
Copy
Edit
{{ title | uppercase }}
Concept Angular utilisé : Pipe intégré (uppercase).

17. TODO 24 : Appliquer le style de mise en surbrillance dans la directive appHighlight
Problème : La directive appHighlight ne met pas le texte en gras et avec un fond jaune comme prévu.
Solution : Modification de la directive pour appliquer dynamiquement le style de surbrillance (gras et couleur de fond) :

typescript
Copy
Edit
this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
Concept Angular utilisé : Directives personnalisées, Renderer2, OnChanges.

Conclusion
Ce fichier présente les solutions aux problèmes rencontrés dans l'application. Chaque problème a été résolu en utilisant les meilleures pratiques d'Angular pour assurer la fonctionnalité et l'expérience utilisateur.
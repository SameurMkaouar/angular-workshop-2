import { Component } from '@angular/core';
import { Suggestion } from '../../models/suggestion';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css'],
})
export class ListSuggestionComponent {
  titreInput: string = '';
  favorites: Suggestion[] = [];
  searchTerm: string = '';

  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: `Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l'équipe.`,
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      nbLikes: 10,
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: `Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.`,
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      nbLikes: 0,
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: `Mise en place d'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.`,
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      nbLikes: 0,
    },
    {
      id: 4,
      title: "Moderniser l'interface utilisateur", // 👈 FIXED HERE
      description: `Refonte complète de l'interface utilisateur pour une meilleure expérience utilisateur.`,
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      nbLikes: 0,
    },
  ];

  /**
   * Retourne la classe CSS appropriée pour le statut
   */
  getStatusClass(status: string): string {
    switch (status) {
      case 'acceptee':
        return 'status-accepted';
      case 'refusee':
        return 'status-refused';
      case 'en_attente':
        return 'status-pending';
      default:
        return '';
    }
  }

  /**
   * Retourne le libellé formaté du statut
   */
  getStatusLabel(status: string): string {
    switch (status) {
      case 'acceptee':
        return 'Acceptée';
      case 'refusee':
        return 'Refusée';
      case 'en_attente':
        return 'En attente';
      default:
        return status;
    }
  }

  /**
   * Incrémente le nombre de likes d'une suggestion
   */
  likeSuggestion(suggestion: Suggestion): void {
    suggestion.nbLikes++;
  }

  /**
   * Ajoute une suggestion aux favoris
   */
  addToFavorites(suggestion: Suggestion): void {
    // Vérifier si la suggestion n'est pas déjà dans les favoris
    const isAlreadyFavorite = this.favorites.some(
      (fav) => fav.id === suggestion.id,
    );

    if (!isAlreadyFavorite) {
      this.favorites.push(suggestion);
      console.log('Suggestion ajoutée aux favoris:', suggestion.title);
      console.log('Nombre de favoris:', this.favorites.length);
    } else {
      console.log('Cette suggestion est déjà dans les favoris');
    }
  }

  /**
   * Vérifie si une suggestion est dans les favoris
   */
  isFavorite(suggestion: Suggestion): boolean {
    return this.favorites.some((fav) => fav.id === suggestion.id);
  }

  /**
   * Retourne les suggestions filtrées par titre et catégorie
   */
  get filteredSuggestions(): Suggestion[] {
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      return this.suggestions;
    }

    const term = this.searchTerm.toLowerCase().trim();

    return this.suggestions.filter(
      (suggestion) =>
        suggestion.title.toLowerCase().includes(term) ||
        suggestion.category.toLowerCase().includes(term),
    );
  }
}

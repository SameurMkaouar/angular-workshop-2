import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css'
})
export class SuggestionFormComponent implements OnInit {
  suggestionForm!: FormGroup;

  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre'
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const currentDate = new Date().toISOString().split('T')[0];
    
    this.suggestionForm = new FormGroup({
      titre: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[A-Z][a-zA-Z]*$')
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(30)
      ]),
      categorie: new FormControl('', Validators.required),
      date: new FormControl({ value: currentDate, disabled: true }),
      status: new FormControl({ value: 'en_attente', disabled: true })
    });
  }

  onSubmit(): void {
    if (this.suggestionForm.valid) {
      const newSuggestion = {
        id: Date.now(), // Auto-increment using timestamp
        titre: this.suggestionForm.controls['titre'].value,
        description: this.suggestionForm.controls['description'].value,
        categorie: this.suggestionForm.controls['categorie'].value,
        date: this.suggestionForm.controls['date'].value,
        status: this.suggestionForm.controls['status'].value,
        nbLikes: 0 // Default value
      };
      
      console.log('Nouvelle suggestion:', newSuggestion);
      // TODO: Add to service/array
      
      // Navigate back to suggestions list
      this.router.navigate(['/suggestions']);
    }
  }
}

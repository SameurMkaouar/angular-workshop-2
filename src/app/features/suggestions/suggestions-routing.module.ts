import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionsComponent } from './suggestions.component';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';

const routes: Routes = [
  { path: '', component: ListSuggestionComponent },
  { path: 'new', component: SuggestionFormComponent },
  { path: 'detail/:id', component: SuggestionDetailsComponent },
  { path: '**', redirectTo: '' }, // Redirect any unknown paths to the suggestions component
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuggestionsRoutingModule {}

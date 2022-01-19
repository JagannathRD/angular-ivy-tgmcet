import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { FormOneComponent } from './form-one/form-one.component';
import { HeroesDetails } from './heroes/heroes-details';
import { HeroesComponent } from './heroes/heroes.component';
import { ToDoComponent } from './to-do-list/ToDO.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'form', component: FormOneComponent },
  { path: 'heroes/:id', component: HeroesDetails },
  { path: 'todo', component: ToDoComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: '**', component: ToDoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  ToDoComponent,
  HeroesComponent,
  PageNotFoundComponent,
  HeroesDetails,
  FormOneComponent,
];

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {ShoeListComponent} from "./app/shoe-list/shoe-list.component";





const routes: Routes =[  {path:'', redirectTo: '/shoes', pathMatch: 'full'},
  { path: 'shoes', component: ShoeListComponent },
  {path:'modify-student', loadComponent: () =>
      import("./app/modify-list-item/modify-list-item.component").then(m => m.ModifyListItemComponent)},
  {path: 'form', loadComponent: () =>
      import("./app/form/form.component").then(m => m.FormComponent)},
  {path: 'modify-student/:id',loadComponent: () =>
      import("./app/modify-list-item/modify-list-item.component").then(m => m.ModifyListItemComponent)},
  {path: '**', loadComponent: () =>
      import("./app/page-not-found/page-not-found.component").then(m => m.PageNotFoundComponent)}
];
bootstrapApplication(AppComponent, {providers: [provideRouter(routes)]})
  .then(r => console.log('Bootstrap successful'));

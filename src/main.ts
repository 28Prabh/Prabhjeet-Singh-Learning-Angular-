import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {ShoeListComponent} from "./app/shoe-list/shoe-list.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";





const routes: Routes =[{ path: 'shoes', component: ShoeListComponent },
  {path:'modify-student', component: ModifyListItemComponent},
  {path: '**', component:PageNotFoundComponent}];
bootstrapApplication(AppComponent, {providers: [provideRouter(routes)]})
  .then(r => console.log('Bootstrap successful'));

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DataType} from "./DataTypeInterface/shoe";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {ShoeListComponent} from "./shoe-list/shoe-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, NgForOf, NgIf, ShoeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'Prabhjeet-Singh-Learning-Angular';
  fname = 'Prabhjeet'
  lname= 'Singh'
}


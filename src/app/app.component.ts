import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DataType} from "./DataTypeInterface/user";
import {DatePipe, NgForOf, NgIf} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'Prabhjeet-Singh-Learning-Angular';
  fname = 'Prabhjeet'
  lname= 'Singh'
  dataArray: DataType[] = [
    { id: 1, name: 'Item 1', description: 'Description 1', Date: new Date(), quantity: 1},
    { id: 2, name: 'Item 2,', Date: new Date(), quantity: 2},
    { id: 3, name: 'Item 3', description: 'Description 3', Date: new Date(), quantity: 2},
    { id: 4, name: 'Item 4', description: 'Description 4', Date: new Date(), quantity: 3},
    { id: 5, name: 'Item 5', Date: new Date(), quantity: 2},
    { id: 6, name: 'Item 6', description: 'Description 6', Date: new Date(), quantity: 6}
  ];
}


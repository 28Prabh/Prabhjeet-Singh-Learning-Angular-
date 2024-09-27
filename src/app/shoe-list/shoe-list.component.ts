import { Component } from '@angular/core';
import {ShoeListItemComponent} from "../shoe-list-item/shoe-list-item.component";
import {NgForOf} from "@angular/common";
import {DataType} from "../DataTypeInterface/shoe";


@Component({
  selector: 'app-shoe-list',
  standalone: true,
  imports: [
    ShoeListItemComponent,
    NgForOf
  ],
  templateUrl: './shoe-list.component.html',
  styleUrl: './shoe-list.component.css'
})
export class ShoeListComponent {


  shoeList: DataType[] = [
    { id: 1, name: 'Item 1', description: 'Description 1', Date: new Date(), quantity: 1},
    { id: 2, name: 'Item 2,', Date: new Date(), quantity: 2},
    { id: 3, name: 'Item 3', description: 'Description 3', Date: new Date(), quantity: 2},
    { id: 4, name: 'Item 4', description: 'Description 4', Date: new Date(), quantity: 3},
    { id: 5, name: 'Item 5', Date: new Date(), quantity: 2},
    { id: 6, name: 'Item 6', description: 'Description 6', Date: new Date(), quantity: 6}
  ];
}

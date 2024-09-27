import { Component } from '@angular/core';
import {ShoeListItemComponent} from "../shoe-list-item/shoe-list-item.component";

@Component({
  selector: 'app-shoe-list',
  standalone: true,
  imports: [
    ShoeListItemComponent
  ],
  templateUrl: './shoe-list.component.html',
  styleUrl: './shoe-list.component.css'
})
export class ShoeListComponent {

  contentItems = [
    { id: 1, title: 'Nike', description: 'Very stylish', imageUrl: 'assets/item1.jpg' },
    { id: 2, title: 'Puma', description: 'Ultra soft sole', imageUrl: 'assets/item2.jpg' },
    { id: 3, title: 'Redtape', description: 'sports perfect', imageUrl: 'assets/item3.jpg' },
    { id: 4, title: 'Sketchers', description: 'Ultra light weight', imageUrl: 'assets/item4.jpg' }
  ];
}

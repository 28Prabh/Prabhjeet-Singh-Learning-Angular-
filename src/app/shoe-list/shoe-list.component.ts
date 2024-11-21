import {Component, OnInit} from '@angular/core';
import {ShoeListItemComponent} from "../shoe-list-item/shoe-list-item.component";
import {NgForOf} from "@angular/common";
import {DataType} from "../DataTypeInterface/shoe";
import {ShoeServiceService} from "../services/shoe-service.service";
import {Router, RouterLink} from "@angular/router";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";


@Component({
  selector: 'app-shoe-list',
  standalone: true,
  imports: [
    ShoeListItemComponent,
    NgForOf,
    RouterLink,
    HoverHighlightDirective
  ],
  templateUrl: './shoe-list.component.html',
  styleUrl: './shoe-list.component.css'
})
export class ShoeListComponent implements OnInit {
  shoeList: DataType[] = [];
  selectedShoe?: DataType; // To hold the shoe being edited

  constructor(private shoeService: ShoeServiceService, private router: Router) {
  }

  ngOnInit() {
    this.fetchShoes();
  }

  fetchShoes() {
    this.shoeService.getShoes().subscribe({
      next: (data: DataType[]) => this.shoeList = data,
      error: err => console.error("Error fetching shoes", err),
      complete: () => console.log("Shoe data fetch complete!")
    });
  }


  deleteShoe(shoeId: number) {
    this.shoeService.deleteShoe(shoeId).subscribe({
      next: (updatedList: DataType[]) => this.shoeList = updatedList,
      error: err => console.error("Error deleting shoe", err),
      complete: () => console.log("Shoe deletion complete!")
    });
  }

}

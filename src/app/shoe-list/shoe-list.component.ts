import {Component, OnInit} from '@angular/core';
import {ShoeListItemComponent} from "../shoe-list-item/shoe-list-item.component";
import {NgForOf} from "@angular/common";
import {DataType} from "../DataTypeInterface/shoe";
import {ShoeServiceService} from "../services/shoe-service.service";


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
export class ShoeListComponent implements OnInit {
  shoeList: DataType[] = [];
  selectedShoe?: DataType; // To hold the shoe being edited

  constructor(private shoeService: ShoeServiceService) {}

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

  editShoe(shoe: DataType) {
    this.selectedShoe = { ...shoe };
  }

  deleteShoe(shoeId: number) {
    this.shoeService.deleteShoe(shoeId).subscribe({
      next: (updatedList: DataType[]) => this.shoeList = updatedList,
      error: err => console.error("Error deleting shoe", err),
      complete: () => console.log("Shoe deletion complete!")
    });
  }

  saveShoe(updatedShoe: DataType) {
    if (updatedShoe.id) {
      this.shoeService.updateShoes(updatedShoe).subscribe({
        next: (updatedList: DataType[]) => {
          this.shoeList = updatedList;
          this.selectedShoe = undefined;
        },
        error: err => console.error("Error updating shoe", err)
      });
    } else {
      this.shoeService.addShoes(updatedShoe).subscribe({
        next: (newList: DataType[]) => {
          this.shoeList = newList;
          this.selectedShoe = undefined;
        },
        error: err => console.error("Error adding shoe", err)
      });
    }
  }

  cancelEdit() {
    this.selectedShoe = undefined;
  }
}

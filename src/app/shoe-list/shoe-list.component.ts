import { Component } from '@angular/core';
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
export class ShoeListComponent {
  shoeList: DataType[] = [];

  constructor (private shoeService: ShoeServiceService){
    //this constructor is primarily used for dependency injection
  }


  ngOnInit(){
    //This lifecycle hook is a good place to fetch and init our data
    this.shoeService.getShoes().subscribe({
      next: (data: DataType[]) => this.shoeList = data,
      error:err => console.error("Error fetching Students", err),
      complete:() => console.log("Student data fetch complete!")
    })

  }


}

import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {DataType} from "./DataTypeInterface/shoe";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {ShoeListComponent} from "./shoe-list/shoe-list.component";
import {ShoeListItemComponent} from "./shoe-list-item/shoe-list-item.component";
import {ShoeServiceService} from "./services/shoe-service.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, NgForOf, NgIf, ShoeListComponent, ShoeListItemComponent, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'Prabhjeet-Singh-Learning-Angular';
  fname = 'Prabhjeet'
  lname= 'Singh'
  firstList: DataType | undefined;

  constructor(private shoeService: ShoeServiceService) {
  }


  ngOnInit() {

    this.shoeService.getShoeById(5).subscribe({
      next: data => this.firstList = data,
      error:err => console.error("Error fetching Students", err),
      complete:() => console.log("Student data fetch complete!")
    })


  }
}


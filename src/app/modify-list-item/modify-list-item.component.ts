import { Component } from '@angular/core';
import {FormComponent} from "../form/form.component";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    FormComponent
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent {

}

import {Component, Input} from '@angular/core';
import {DatePipe, DecimalPipe, NgIf, NgStyle, TitleCasePipe} from "@angular/common";
import {DataType} from "../DataTypeInterface/shoe";

@Component({
  selector: 'app-shoe-list-item',
  standalone: true,
  imports: [
    NgStyle,
    NgIf,
    DatePipe,
    TitleCasePipe,
    DecimalPipe
  ],
  templateUrl: './shoe-list-item.component.html',
  styleUrl: './shoe-list-item.component.css'
})
export class ShoeListItemComponent {
@Input() shoe?: DataType;
  @Input() index?: number;
}

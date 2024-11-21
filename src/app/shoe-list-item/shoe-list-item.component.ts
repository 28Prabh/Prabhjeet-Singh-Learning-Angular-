import {Component, Input} from '@angular/core';
import {DatePipe, DecimalPipe, NgIf, NgStyle, TitleCasePipe} from "@angular/common";
import {DataType} from "../DataTypeInterface/shoe";
import {StarPipePipe} from "../pipes/star-pipe.pipe";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";

@Component({
  selector: 'app-shoe-list-item',
  standalone: true,
  imports: [
    NgStyle,
    NgIf,
    DatePipe,
    TitleCasePipe,
    DecimalPipe,
    StarPipePipe,
    HoverHighlightDirective
  ],
  templateUrl: './shoe-list-item.component.html',
  styleUrl: './shoe-list-item.component.css'
})
export class ShoeListItemComponent {
@Input() shoe?: DataType;
  @Input() index?: number;
}

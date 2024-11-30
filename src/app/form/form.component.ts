import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ShoeServiceService} from "../services/shoe-service.service";
import {DataType} from "../DataTypeInterface/shoe";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HoverHighlightDirective,
    HighlightOnFocusDirective,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  shoeForm: FormGroup;
  shoe: DataType | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private shoeService: ShoeServiceService,
    private router: Router
  ){
    this.shoeForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      description: [''],
      Date: [''],
      quantity: ['',Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    if (id) {

      this.shoeService.getShoeById(+id).subscribe(shoe => {
        if(shoe) {
          this.shoe = shoe;
          console.log(shoe)

          this.shoeForm.patchValue(shoe);

        }
        else{
          console.log("Creating a new value.")
        }
      });
    }
  }

  onSubmit(): void {
    const shoe: DataType = this.shoeForm.value;

    // Check if we're updating an existing shoe
    if (shoe.id) {
      console.log("update");
      this.shoeService.updateShoes(shoe);
      this.router.navigate(['/shoes']);

    } else  {
      console.log("valid");
      // For adding a new student, generate a new ID
      const newId = this.shoeService.generateNewId();
      // This method will create a new ID
      shoe.id = newId;
      this.shoeService.addShoes(shoe);
      this.router.navigate(['/shoes']);

    }

  }

}

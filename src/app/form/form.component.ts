import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ShoeServiceService} from "../services/shoe-service.service";
import {DataType} from "../DataTypeInterface/shoe";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
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
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: [''],
      date: [''],
      quantity: ['',Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.shoeService.getShoeById(+id).subscribe(shoe => {
        if(shoe) {
          this.shoe = shoe;

          this.shoeForm.patchValue(shoe);
        }
      });
    }
  }

  onSubmit(): void {
    const shoe: DataType = this.shoeForm.value;

    // Check if we're updating an existing student
    if (shoe.id) {
      this.shoeService.updateShoes(shoe);
    } else {
      // For adding a new student, generate a new ID
      const newId = this.shoeService.generateNewId(); // This method will create a new ID
      shoe.id = newId;
      this.shoeService.addShoes(shoe);
    }

    this.router.navigate(['/shoes']);
  }

}

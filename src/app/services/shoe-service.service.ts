import { Injectable } from '@angular/core';
import {DataType} from "../DataTypeInterface/shoe";
import {shoeList} from "../file/mock-content";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoeServiceService {



  private shoes : DataType[] = shoeList;

  constructor() { }

  getShoes(): Observable<DataType[]> {
    return of(shoeList);
  }

  addShoes(newAnimal: DataType): Observable<DataType[]> {
    this.shoes.push(newAnimal)
    return of(this.shoes);

  }

  getShoeById(shoeId: number): Observable<DataType | undefined> {
    const shoe = this.shoes.find(shoe => shoe.id === shoeId);
    return of(shoe);


  }

  updateShoes(updatedShoe: DataType): Observable<DataType[]> {
    const index = this.shoes.findIndex(shoe => shoe.id === updatedShoe.id);
    if (index !== -1) {
      this.shoes[index] = updatedShoe;
    }
    return of(this.shoes);


  }

  deleteAnimal(shoeId: number): Observable<DataType[]> {
    this.shoes = this.shoes.filter(shoe => shoe.id !== shoeId);
    return of(this.shoes);
  }

}

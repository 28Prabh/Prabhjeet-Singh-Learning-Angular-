import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeListItemComponent } from './shoe-list-item.component';

describe('ShoeListItemComponent', () => {
  let component: ShoeListItemComponent;
  let fixture: ComponentFixture<ShoeListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoeListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

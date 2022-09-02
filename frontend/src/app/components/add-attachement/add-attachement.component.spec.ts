import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttachementComponent } from './add-attachement.component';

describe('AddAttachementComponent', () => {
  let component: AddAttachementComponent;
  let fixture: ComponentFixture<AddAttachementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAttachementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAttachementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

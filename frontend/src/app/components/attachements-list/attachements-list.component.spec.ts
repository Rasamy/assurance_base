import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachementsListComponent } from './attachements-list.component';

describe('AttachementsListComponent', () => {
  let component: AttachementsListComponent;
  let fixture: ComponentFixture<AttachementsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachementsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttachementsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

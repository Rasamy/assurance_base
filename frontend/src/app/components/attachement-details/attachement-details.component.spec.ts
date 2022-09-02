import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachementDetailsComponent } from './attachement-details.component';

describe('AttachementDetailsComponent', () => {
  let component: AttachementDetailsComponent;
  let fixture: ComponentFixture<AttachementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachementDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttachementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

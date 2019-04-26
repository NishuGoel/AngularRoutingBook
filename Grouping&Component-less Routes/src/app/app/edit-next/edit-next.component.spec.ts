import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNextComponent } from './edit-next.component';

describe('EditNextComponent', () => {
  let component: EditNextComponent;
  let fixture: ComponentFixture<EditNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

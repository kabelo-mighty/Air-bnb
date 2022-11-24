import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewroomComponent } from './viewroom.component';

describe('ViewroomComponent', () => {
  let component: ViewroomComponent;
  let fixture: ComponentFixture<ViewroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

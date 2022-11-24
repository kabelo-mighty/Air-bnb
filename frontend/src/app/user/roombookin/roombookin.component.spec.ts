import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoombookinComponent } from './roombookin.component';

describe('RoombookinComponent', () => {
  let component: RoombookinComponent;
  let fixture: ComponentFixture<RoombookinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoombookinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoombookinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

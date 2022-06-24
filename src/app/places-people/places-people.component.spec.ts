import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesPeopleComponent } from './places-people.component';

describe('PlacesPeopleComponent', () => {
  let component: PlacesPeopleComponent;
  let fixture: ComponentFixture<PlacesPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacesPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

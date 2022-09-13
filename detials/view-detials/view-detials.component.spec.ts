import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetialsComponent } from './view-detials.component';

describe('ViewDetialsComponent', () => {
  let component: ViewDetialsComponent;
  let fixture: ComponentFixture<ViewDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDetialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

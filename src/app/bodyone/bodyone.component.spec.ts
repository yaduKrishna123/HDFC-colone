import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyoneComponent } from './bodyone.component';

describe('BodyoneComponent', () => {
  let component: BodyoneComponent;
  let fixture: ComponentFixture<BodyoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

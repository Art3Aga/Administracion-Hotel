import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcuartosComponent } from './allcuartos.component';

describe('AllcuartosComponent', () => {
  let component: AllcuartosComponent;
  let fixture: ComponentFixture<AllcuartosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcuartosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcuartosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

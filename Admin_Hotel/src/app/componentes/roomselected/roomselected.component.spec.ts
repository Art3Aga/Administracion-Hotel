import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomselectedComponent } from './roomselected.component';

describe('RoomselectedComponent', () => {
  let component: RoomselectedComponent;
  let fixture: ComponentFixture<RoomselectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomselectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomselectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

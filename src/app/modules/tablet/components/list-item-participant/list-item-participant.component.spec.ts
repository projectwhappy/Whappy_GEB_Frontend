import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemParticipantComponent } from './list-item-participant.component';

describe('ListItemParticipantComponent', () => {
  let component: ListItemParticipantComponent;
  let fixture: ComponentFixture<ListItemParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

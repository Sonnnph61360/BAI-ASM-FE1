import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todoitem } from './todoitem';

describe('Todoitem', () => {
  let component: Todoitem;
  let fixture: ComponentFixture<Todoitem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Todoitem],
    }).compileComponents();

    fixture = TestBed.createComponent(Todoitem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

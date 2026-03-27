import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Numberitem } from './numberitem';

describe('Numberitem', () => {
  let component: Numberitem;
  let fixture: ComponentFixture<Numberitem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Numberitem],
    }).compileComponents();

    fixture = TestBed.createComponent(Numberitem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

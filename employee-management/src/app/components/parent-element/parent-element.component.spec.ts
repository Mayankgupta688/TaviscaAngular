import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentElementComponent } from './parent-element.component';

describe('ParentElementComponent', () => {
  let component: ParentElementComponent;
  let fixture: ComponentFixture<ParentElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseDirectivesComponent } from './use-directives.component';

describe('UseDirectivesComponent', () => {
  let component: UseDirectivesComponent;
  let fixture: ComponentFixture<UseDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

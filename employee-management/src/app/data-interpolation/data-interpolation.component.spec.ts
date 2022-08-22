import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInterpolationComponent } from './data-interpolation.component';

describe('DataInterpolationComponent', () => {
  let component: DataInterpolationComponent;
  let fixture: ComponentFixture<DataInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataInterpolationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

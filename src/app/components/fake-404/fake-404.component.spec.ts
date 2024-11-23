import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fake404Component } from './fake-404.component';

describe('Fake404Component', () => {
  let component: Fake404Component;
  let fixture: ComponentFixture<Fake404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fake404Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Fake404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

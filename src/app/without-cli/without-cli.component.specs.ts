import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutCliComponent } from './without-cli.component';

describe('WithoutCliComponent', () => {
  let component: WithoutCliComponent;
  let fixture: ComponentFixture<WithoutCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
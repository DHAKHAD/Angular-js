import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithCliComponent } from './with-cli.component';

describe('WithCliComponent', () => {
  let component: WithCliComponent;
  let fixture: ComponentFixture<WithCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

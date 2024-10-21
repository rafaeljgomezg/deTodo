import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApireadObservableComponent } from './apiread-observable.component';

describe('ApireadObservableComponent', () => {
  let component: ApireadObservableComponent;
  let fixture: ComponentFixture<ApireadObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApireadObservableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApireadObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

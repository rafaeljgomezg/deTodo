import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApireadNgrxComponent } from './apiread-ngrx.component';

describe('ApireadNgrxComponent', () => {
  let component: ApireadNgrxComponent;
  let fixture: ComponentFixture<ApireadNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApireadNgrxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApireadNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

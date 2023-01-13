import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateContractComponent } from './activate-contract.component';

describe('ActivateContractComponent', () => {
  let component: ActivateContractComponent;
  let fixture: ComponentFixture<ActivateContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivateContractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivateContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

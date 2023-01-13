import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoidContractComponent } from './void-contract.component';

describe('VoidContractComponent', () => {
  let component: VoidContractComponent;
  let fixture: ComponentFixture<VoidContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoidContractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoidContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

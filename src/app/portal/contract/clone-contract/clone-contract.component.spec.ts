import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneContractComponent } from './clone-contract.component';

describe('CloneContractComponent', () => {
  let component: CloneContractComponent;
  let fixture: ComponentFixture<CloneContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloneContractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloneContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

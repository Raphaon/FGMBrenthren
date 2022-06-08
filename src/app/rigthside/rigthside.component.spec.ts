import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigthsideComponent } from './rigthside.component';

describe('RigthsideComponent', () => {
  let component: RigthsideComponent;
  let fixture: ComponentFixture<RigthsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RigthsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RigthsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

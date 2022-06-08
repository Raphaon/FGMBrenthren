import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchMemberComponent } from './church-member.component';

describe('ChurchMemberComponent', () => {
  let component: ChurchMemberComponent;
  let fixture: ComponentFixture<ChurchMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChurchMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurchMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

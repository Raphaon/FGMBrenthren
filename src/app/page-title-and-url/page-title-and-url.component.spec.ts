import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitleAndUrlComponent } from './page-title-and-url.component';

describe('PageTitleAndUrlComponent', () => {
  let component: PageTitleAndUrlComponent;
  let fixture: ComponentFixture<PageTitleAndUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTitleAndUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTitleAndUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

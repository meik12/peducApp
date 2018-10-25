import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookFrameComponent } from './facebook-frame.component';

describe('FacebookFrameComponent', () => {
  let component: FacebookFrameComponent;
  let fixture: ComponentFixture<FacebookFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

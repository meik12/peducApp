import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpresentationComponent } from './postpresentation.component';

describe('PostpresentationComponent', () => {
  let component: PostpresentationComponent;
  let fixture: ComponentFixture<PostpresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostpresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

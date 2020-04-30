import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentKindCardComponent } from './content-kind-card.component';

describe('ContentKindCardComponent', () => {
  let component: ContentKindCardComponent;
  let fixture: ComponentFixture<ContentKindCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentKindCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentKindCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

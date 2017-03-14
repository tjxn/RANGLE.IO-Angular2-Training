import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNameIsComponent } from './my-name-is.component';

describe('MyNameIsComponent', () => {
  let component: MyNameIsComponent;
  let fixture: ComponentFixture<MyNameIsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNameIsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNameIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

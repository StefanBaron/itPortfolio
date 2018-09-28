import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDataComponentComponent } from './my-data-component.component';

describe('MyDataComponentComponent', () => {
  let component: MyDataComponentComponent;
  let fixture: ComponentFixture<MyDataComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDataComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

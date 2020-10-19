import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoProtegerseComponent } from './como-protegerse.component';

describe('ComoProtegerseComponent', () => {
  let component: ComoProtegerseComponent;
  let fixture: ComponentFixture<ComoProtegerseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoProtegerseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoProtegerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

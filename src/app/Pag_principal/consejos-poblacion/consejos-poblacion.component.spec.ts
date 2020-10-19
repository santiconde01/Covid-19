import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsejosPoblacionComponent } from './consejos-poblacion.component';

describe('ConsejosPoblacionComponent', () => {
  let component: ConsejosPoblacionComponent;
  let fixture: ComponentFixture<ConsejosPoblacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsejosPoblacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsejosPoblacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

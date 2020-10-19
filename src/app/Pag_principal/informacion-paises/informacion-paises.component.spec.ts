import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPaisesComponent } from './informacion-paises.component';

describe('InformacionPaisesComponent', () => {
  let component: InformacionPaisesComponent;
  let fixture: ComponentFixture<InformacionPaisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionPaisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

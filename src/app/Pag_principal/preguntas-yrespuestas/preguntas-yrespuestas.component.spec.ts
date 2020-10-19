import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasYrespuestasComponent } from './preguntas-yrespuestas.component';

describe('PreguntasYrespuestasComponent', () => {
  let component: PreguntasYrespuestasComponent;
  let fixture: ComponentFixture<PreguntasYrespuestasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntasYrespuestasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasYrespuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

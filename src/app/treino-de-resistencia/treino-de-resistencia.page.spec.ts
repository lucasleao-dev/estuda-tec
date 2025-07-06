import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreinoDeResistenciaPage } from './treino-de-resistencia.page';

describe('TreinoDeResistenciaPage', () => {
  let component: TreinoDeResistenciaPage;
  let fixture: ComponentFixture<TreinoDeResistenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinoDeResistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

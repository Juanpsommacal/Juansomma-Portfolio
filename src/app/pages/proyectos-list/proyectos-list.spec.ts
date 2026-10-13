import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ProyectosList } from './proyectos-list';

describe('ProyectosList', () => {
  let component: ProyectosList;
  let fixture: ComponentFixture<ProyectosList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosList],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

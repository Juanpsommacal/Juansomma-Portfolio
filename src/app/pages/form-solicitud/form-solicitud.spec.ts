import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { FormSolicitud } from './form-solicitud';

describe('FormSolicitud', () => {
  let component: FormSolicitud;
  let fixture: ComponentFixture<FormSolicitud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSolicitud],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSolicitud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

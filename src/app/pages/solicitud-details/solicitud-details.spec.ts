import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { SolicitudDetails } from './solicitud-details';

describe('SolicitudDetails', () => {
  let component: SolicitudDetails;
  let fixture: ComponentFixture<SolicitudDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudDetails],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

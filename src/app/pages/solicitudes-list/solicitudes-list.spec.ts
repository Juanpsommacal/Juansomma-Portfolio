import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { SolicitudesList } from './solicitudes-list';

describe('SolicitudesList', () => {
  let component: SolicitudesList;
  let fixture: ComponentFixture<SolicitudesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudesList],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

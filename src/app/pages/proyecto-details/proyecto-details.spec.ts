import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ProyectoDetails } from './proyecto-details';

describe('ProyectoDetails', () => {
  let component: ProyectoDetails;
  let fixture: ComponentFixture<ProyectoDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoDetails],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddToRootComponent } from './add-to-root.component';

describe('AddToRootComponent', () => {
  let component: AddToRootComponent;
  let fixture: ComponentFixture<AddToRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

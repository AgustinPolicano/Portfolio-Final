/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NahuelP2pComponent } from './nahuel-p2p.component';

describe('NahuelP2pComponent', () => {
  let component: NahuelP2pComponent;
  let fixture: ComponentFixture<NahuelP2pComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NahuelP2pComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NahuelP2pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

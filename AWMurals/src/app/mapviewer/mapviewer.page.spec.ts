import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapviewerPage } from './mapviewer.page';

describe('MapviewerPage', () => {
  let component: MapviewerPage;
  let fixture: ComponentFixture<MapviewerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapviewerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapviewerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

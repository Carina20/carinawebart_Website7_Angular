import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelsPageComponent } from './travels-page.component';

describe('TravelsPageComponent', () => {
  let component: TravelsPageComponent;
  let fixture: ComponentFixture<TravelsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

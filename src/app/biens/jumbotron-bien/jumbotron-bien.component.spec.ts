import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronBienComponent } from './jumbotron-bien.component';

describe('JumbotronBienComponent', () => {
  let component: JumbotronBienComponent;
  let fixture: ComponentFixture<JumbotronBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumbotronBienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

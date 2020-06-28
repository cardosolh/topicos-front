import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqListaComponent } from './faq-lista.component';

describe('FaqListaComponent', () => {
  let component: FaqListaComponent;
  let fixture: ComponentFixture<FaqListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FaqListaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

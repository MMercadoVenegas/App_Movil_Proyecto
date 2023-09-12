import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterionicPage } from './register.page';

describe('RegisterionicPage', () => {
  let component: RegisterionicPage;
  let fixture: ComponentFixture<RegisterionicPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterionicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

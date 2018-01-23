import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusEditComponent } from './menus.edit.component';

describe('Menus.EditComponent', () => {
  let component: MenusEditComponent;
  let fixture: ComponentFixture<MenusEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenusEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

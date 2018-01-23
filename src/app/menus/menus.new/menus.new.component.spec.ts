import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusNewComponent } from './menus.new.component';

describe('Menus.NewComponent', () => {
  let component: MenusNewComponent;
  let fixture: ComponentFixture<MenusNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenusNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

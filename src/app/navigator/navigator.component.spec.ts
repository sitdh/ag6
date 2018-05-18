
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorComponent } from './navigator.component';

describe('NavigatorComponent', () => {
  let component: NavigatorComponent;
  let fixture: ComponentFixture<NavigatorComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

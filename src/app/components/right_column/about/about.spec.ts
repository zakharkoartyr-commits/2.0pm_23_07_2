import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about'; // Виправлено тут

describe('AboutComponent', () => { // Виправлено тут
  let component: AboutComponent; // Виправлено тут
  let fixture: ComponentFixture<AboutComponent>; // Виправлено тут

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent] // Виправлено тут
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent); // Виправлено тут
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
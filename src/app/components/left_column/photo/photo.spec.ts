import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoComponent } from './photo'; // Зміни тут

describe('PhotoComponent', () => { // І тут
  let component: PhotoComponent; // І тут
  let fixture: ComponentFixture<PhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoComponent] // І тут
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
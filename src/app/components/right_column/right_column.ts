import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ResumeService } from '../../components/services/resume';

// Імпортуємо всі дочірні компоненти
import { AboutComponent } from './about/about';
import { EducationComponent } from './education/education';
import { Experience } from './experience/experience';
import { ExpertiseComponent } from './expertise/expertise';

@Component({
  selector: 'app-right_column',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    AboutComponent, 
    EducationComponent, 
    Experience, 
    ExpertiseComponent
  ],
  templateUrl: './right_column.html',
  styleUrl: './right_column.scss'
})
export class RightColumn implements OnInit {
  // Дані з сервера
  resumeData: any = null;
  
  // Форма Лабораторної №4
  contactForm!: FormGroup;
  submitted = false;

  // Стан згортання секцій (для секцій, які описані прямо в цьому компоненті, як контактна форма)
  sections: any = {
    contact: true
  };

  constructor(
    private resumeService: ResumeService, 
    private fb: FormBuilder, 
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // Отримуємо дані про резюме
    this.resumeService.getResumeData().subscribe({
      next: (data) => {
        this.resumeData = data;
      },
      error: (err) => {
        console.error('Помилка завантаження даних:', err);
      }
    });

    // Ініціалізуємо реактивну форму
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  // Метод для перемикання згортання контактної форми
  toggleSection(name: string) {
    this.sections[name] = !this.sections[name];
  }

  // Обробка відправки форми (POST запит на сервер)
  onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.valid) {
      this.http.post('http://localhost:3000/api/contact', this.contactForm.value)
        .subscribe({
          next: (response) => {
            alert('Дані успішно відправлено на сервер!');
            this.contactForm.reset();
            this.submitted = false;
          },
          error: (err) => {
            console.error('Помилка відправки:', err);
            alert('Не вдалося відправити дані. Перевірте, чи запущений сервер.');
          }
        });
    }
  }
}
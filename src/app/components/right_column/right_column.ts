import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about';
import { EducationComponent } from './education/education';
import { Experience } from './experience/experience'; // Перевір, щоб назва класу була Experience
import { ExpertiseComponent } from './expertise/expertise';
import { ResumeService } from '../../services/resume';

@Component({
  selector: 'app-right_column',
  standalone: true,
  imports: [
    CommonModule, 
    AboutComponent, 
    EducationComponent, 
    Experience, 
    ExpertiseComponent
  ],
  templateUrl: './right_column.html',
  styleUrl: './right_column.scss'
})
export class RightColumn implements OnInit {
  resumeData: any = null;
  errorMessage: string = '';
  
  // Додаткова змінна для лаби (наприклад, лічильник взаємодій з дитиною)
  childNotificationCount: number = 0;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.resumeService.getResumeData().subscribe({
      next: (data) => {
        this.resumeData = data;
        console.log('Дані успішно завантажено', data);
      },
      error: (err) => {
        this.errorMessage = 'Помилка: сервер Node.js не відповідає!';
        console.error(err);
      }
    });
  }

  // МЕТОД ДЛЯ @Output: обробка події від дитини
  handleChildAction(eventData: any): void {
    this.childNotificationCount++;
    console.log('Подія від дочірнього компонента:', eventData);
    
    // Якщо подія — це видалення досвіду (приклад для лаби)
    if (eventData.type === 'deleteExperience') {
      this.resumeData.experience = this.resumeData.experience.filter(
        (item: any) => item.position !== eventData.position
      );
    }
  }

  updateDataOnServer(): void {
    if (!this.resumeData) return;
    this.resumeService.saveResumeData(this.resumeData).subscribe({
      next: () => alert('Дані збережено на сервері!'),
      error: () => alert('Помилка при збереженні')
    });
  }
}
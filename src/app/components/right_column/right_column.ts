import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education/education';
import { Experience } from './experience/experience'; 
import { ExpertiseComponent } from './expertise/expertise';
import { ResumeService } from '../../services/resume';

@Component({
  selector: 'app-right_column',
  standalone: true,
  imports: [
    CommonModule, 
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
  
  childNotificationCount: number = 0;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.loadData();
  }


  sections: any = {
    about: true,
    education: true,
    experience: true,
    expertise: true
  };

  // Метод для перемикання
  toggleSection(sectionName: string): void {
    this.sections[sectionName] = !this.sections[sectionName];
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


  handleChildAction(eventData: any): void {
    this.childNotificationCount++;
    console.log('Подія від дочірнього компонента:', eventData);
    
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
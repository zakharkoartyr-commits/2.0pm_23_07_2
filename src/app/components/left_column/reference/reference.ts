import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reference.html',
  styleUrl: './reference.scss'
})
export class ReferenceComponent implements OnInit {
  ref: any = null;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
  this.resumeService.getResumeData().subscribe({
    next: (data: any) => {
      // Виправляємо шлях: додаємо .personalData перед .reference
      if (data && data.personalData && data.personalData.reference) {
        this.ref = data.personalData.reference;
        console.log('Reference завантажено:', this.ref);
      }
    },
    error: (err) => console.error('Помилка завантаження Reference:', err)
  });
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume'; // ВИПРАВЛЕНО: піднімаємось на два рівні в components/services

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo.html',
  styleUrl: './photo.scss'
})
export class PhotoComponent implements OnInit {
  // Змінна для посилання на фото, спочатку null
  imageUrl: string | null = null;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
  this.resumeService.getResumeData().subscribe({
    next: (data: any) => {
      if (data && data.personalData) {
        // Додаємо невелику затримку, щоб Angular встиг оновити дерево компонентів
        setTimeout(() => {
          this.imageUrl = data.personalData.photoUrl;
        }, 0);
      }
    }
  });
}}
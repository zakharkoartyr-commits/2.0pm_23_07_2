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
        // Беремо дані саме з поля reference
        if (data && data.reference) {
          this.ref = data.reference;
        }
      },
      error: (err) => console.error('Помилка завантаження Reference:', err)
    });
  }
}
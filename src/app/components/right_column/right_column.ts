import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about';
import { EducationComponent } from './education/education'; // Додали Component
import { Experience } from './experience/experience'; // Додали Component
import { ExpertiseComponent } from './expertise/expertise';

@Component({
  selector: 'app-right_column',
  standalone: true,
  imports: [
    AboutComponent,
    CommonModule,
    EducationComponent, 
    Experience, 
    ExpertiseComponent
  ],
  templateUrl: './right_column.html',
  styleUrl: './right_column.scss'
})
export class RightColumn {
  @Input() jobsData: any[] = [];
  @Input() firstName: string = 'JHON';
  @Input() lastName: string = 'ABIRAR';
}
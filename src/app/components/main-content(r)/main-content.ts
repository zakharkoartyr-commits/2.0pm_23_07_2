import { Component, Input } from '@angular/core';
import { AboutComponent } from './about/about';
import { EducationComponent } from './education/education'; // Додали Component
import { Experience } from './experience/experience'; // Додали Component
import { ExpertiseComponent } from './expertise/expertise';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    AboutComponent,
    EducationComponent, // Виправили тут
    Experience, // Виправили тут
    ExpertiseComponent
  ],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {
  @Input() jobsData: any[] = [];
}
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  @Input() jobs: any[] = [];
}
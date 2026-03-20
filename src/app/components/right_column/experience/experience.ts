import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  @Input() jobs: any[] = [];
  
  @Output() deleteExperience = new EventEmitter<any>();

  onDelete(position: string) {
    this.deleteExperience.emit({
      type: 'deleteExperience',
      position: position
    });
  }
}
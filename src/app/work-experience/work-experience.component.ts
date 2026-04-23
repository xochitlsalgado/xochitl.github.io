import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceService } from '../services/work-experience-service/work-experience';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html'
})
export class WorkExperienceComponent implements OnInit {

  trabajos: any[] = [];

  constructor(private workService: WorkExperienceService) {}

  ngOnInit(): void {
    this.workService.getWorkExperience().subscribe(res => {
      this.trabajos = res;
    });
  }
}

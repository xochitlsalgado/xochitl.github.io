import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationService } from '../services/education-service/education';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html'
})
export class EducationComponent implements OnInit {

  education: any[] = [];

  constructor(private eduService: EducationService) {}

  ngOnInit(): void {
    this.eduService.getEducation().subscribe(res => {
      this.education = res;
    });
  }
}

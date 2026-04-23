import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsService } from '../services/skills-service/skills';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {

  skills: any[] = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe((res: any[]) => {
      console.log("SKILLS:", res);
      this.skills = res;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterestsService } from '../services/interests-service/interests';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html'
})
export class InterestsComponent implements OnInit {

  interests: any[] = [];

  constructor(private intService: InterestsService) {}

  ngOnInit(): void {
    this.intService.getInterests().subscribe(res => {
      this.interests = res;
    });
  }
}

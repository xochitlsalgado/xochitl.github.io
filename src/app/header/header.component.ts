import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderService } from '../services/header-service/header';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  data: any;

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.getHeader().subscribe(res => {
      this.data = res[0]; // 👈 primer documento
    });
  }
}

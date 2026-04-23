import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesService } from '../services/languages-service/languages';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html'
})
export class LanguagesComponent implements OnInit {

  languages: any[] = [];

  constructor(private langService: LanguagesService) {}

  ngOnInit(): void {
    this.langService.getLanguages().subscribe(res => {
      this.languages = res;
    });
  }
}


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificatesService } from '../services/certificates-service/certificates';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html'
})
export class CertificatesComponent implements OnInit {

  certificates: any[] = [];

  constructor(private certService: CertificatesService) {}

  ngOnInit(): void {
    this.certService.getCertificates().subscribe(res => {
      this.certificates = res;
    });
  }
}

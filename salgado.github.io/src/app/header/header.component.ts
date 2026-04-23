import { Component } from '@angular/core';
import { HeaderService } from '../services/header.service'; // Asegúrate que esta ruta sea correcta

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // El constructor DEBE ir dentro de las llaves de la clase
  constructor(public headerService: HeaderService) { }
}

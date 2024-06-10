import { Component, inject } from '@angular/core';
import { AuthService } from 'auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  authService = inject(AuthService);

  update() {
    this.authService.setUsername('Yoo');
  }
}

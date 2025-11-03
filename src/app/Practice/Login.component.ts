import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user: User = { username: '', password: '' };
  errorMessage = '';
  public Login: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
   this.Login = true;
}


  onLogin(): void {
    this.authService.Login(this.user).subscribe({
      next: (response) => {
        if (response && response.token) {
        this.authService.setToken(response.token);
        this.Login = false;
        this.router.navigate(['/app-dietinfo']);
        console.log('Login successful');
        }else{
          this.errorMessage = 'Login failed';
        }
      },
      error: (err) => {
        this.errorMessage = 'Login failed';
      }
    });
  }
}

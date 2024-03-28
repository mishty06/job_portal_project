import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  login(username: string, password: string): void {
    // Placeholder login logic
    if (username === 'user' && password === 'password') {
      console.log('Login successful');
      // Redirect to home page after successful login
      this.router.navigate(['./dashboard/home/home.component.html']);
    } else {
      console.log('Invalid username or password');
    }
  }
}

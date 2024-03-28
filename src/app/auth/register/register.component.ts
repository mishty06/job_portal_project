import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router) {}

  register(username: string, email: string, password: string): void {
    // Placeholder registration logic
    console.log('Registration successful');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Redirect to home page after successful registration
    this.router.navigate(['./dashboard/home/home.component.html']);
  }
}

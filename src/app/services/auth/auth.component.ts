import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isLoggedIn: boolean = false;
  username: string = "";
  password: string = "";
  newUsername: string = "";
  email: string = "";
  newPassword: string = "";

  login() {
    // Placeholder login logic
    if (this.username === "user" && this.password === "password") {
      this.isLoggedIn = true;
    } else {
      alert("Invalid username or password");
    }
  }

  register() {
    // Placeholder registration logic
    alert("User registered successfully!");
  }

  logout() {
    this.isLoggedIn = false;
    this.username = "";
    this.password = "";
  }
}

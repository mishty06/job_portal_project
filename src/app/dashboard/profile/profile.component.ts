import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  username: string = "JohnDoe";
  email: string = "john@example.com";

  editProfile() {
    // Placeholder logic for editing profile
    alert("Edit profile functionality coming soon!");
  }
}

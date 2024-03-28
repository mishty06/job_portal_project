import { Component } from '@angular/core';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent {
  job: any = {
    id: 1,
    title: "Software Developer",
    description: "Develop web applications using Angular.",
    location: "New York, USA"
  };

  applyForJob() {
    // Placeholder logic for applying for a job
    alert("You have applied for the job!");
  }
}

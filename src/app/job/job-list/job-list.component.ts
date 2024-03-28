import { Component } from '@angular/core';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {
  jobs: any[] = [
    { id: 1, title: "Software Developer", description: "Develop web applications using Angular.", location: "New York, USA" },
    { id: 2, title: "Frontend Developer", description: "Design and develop user interfaces.", location: "San Francisco, USA" }
  ];

  viewJobDetails(jobId: number) {
    // Placeholder logic to navigate to job detail page
    alert("View job details for job ID: " + jobId);
  }
}

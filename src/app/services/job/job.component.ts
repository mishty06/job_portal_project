import { Component } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
  jobTitle: string = "Software Developer";
  jobDescription: string = "Develop web applications using Angular.";
  jobLocation: string = "New York, USA";
}

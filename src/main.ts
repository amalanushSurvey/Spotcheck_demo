import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from Surveysparrow</h1>
    <a target="_blank" href="https://angular.dev/overview">
  
    </a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);

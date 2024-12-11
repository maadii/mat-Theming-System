import { Component } from '@angular/core';
import { StyleManagerServiceService } from './services/style-manager-service.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <button mat-raised-button (click)="toggleTheme()">
        {{ styleManager.isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme' }}
      </button>
      <app-sample-one></app-sample-one>
      <app-sample-two></app-sample-two>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      text-align: center;
    }
  `]
})
export class AppComponent {
  constructor(public styleManager: StyleManagerServiceService) {}

  toggleTheme() {
    this.styleManager.toggleTheme();
  }
}

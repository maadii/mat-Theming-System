import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleManagerServiceService {
  private darkThemeClass = 'dark-theme';
  isDark = false;

  toggleTheme() {
    if (this.isDark) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
  } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
  } 
    this.isDark = !this.isDark;
  }
  constructor() { }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleManagerServiceService {
  private darkThemeClass = 'dark-theme';
  isDark = false;

  toggleTheme() {
    if (this.isDark) {
      document.body.classList.remove(this.darkThemeClass);
    } else {
      document.body.classList.add(this.darkThemeClass);
    }
    this.isDark = !this.isDark;
  }
  constructor() { }
}

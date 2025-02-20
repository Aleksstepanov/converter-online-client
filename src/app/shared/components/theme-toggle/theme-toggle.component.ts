import { Component } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ThemeService } from '@providers/theme/theme.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [ButtonComponent],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css',
})
export class ThemeToggleComponent {
  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    const newTheme = this.themeService.getTheme() === 'dark' ? 'dark' : 'light';
    this.themeService.setHeme(newTheme);
  }
}

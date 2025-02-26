import { Component } from '@angular/core';
import { LogoComponent } from '@shared/components/logo/logo.component';

@Component({
  selector: 'app-sidebar',
  imports: [LogoComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {}

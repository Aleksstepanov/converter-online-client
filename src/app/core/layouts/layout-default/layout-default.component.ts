import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '@shared/components/sidebar/sidebar.component';
import { TheHeaderComponent } from '@shared/components/the-header/the-header.component';

@Component({
  selector: 'app-layout-default',
  imports: [RouterOutlet, SidebarComponent, TheHeaderComponent],
  templateUrl: './layout-default.component.html',
  styleUrl: './layout-default.component.css',
})
export class LayoutDefaultComponent {}

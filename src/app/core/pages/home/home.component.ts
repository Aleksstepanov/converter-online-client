import { Component } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { InputComponent } from '@shared/components/input/input.component';

@Component({
  selector: 'app-home',
  imports: [ButtonComponent, InputComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  onButtonClick() {
    console.log('Кнопка была нажата!');
  }
}

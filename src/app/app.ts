import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  show = signal(false);

  users = signal([
    'joao',
    'maria',
    'pedro',
  ])

}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ExamplesComponent } from './components/examples/examples/examples.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    ExamplesComponent
  ],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}

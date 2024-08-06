import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-content-child-decorator-example',
  templateUrl: './content-child-decorator-example.component.html',
  styleUrls: ['./content-child-decorator-example.component.css'],
  imports:[
    ParentComponent
  ],
  standalone:true
})
export class ContentChildDecoratorExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
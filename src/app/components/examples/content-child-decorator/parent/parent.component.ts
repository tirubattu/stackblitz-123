import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  imports :[
    ChildComponent
  ],
  standalone:true
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
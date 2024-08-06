import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-comp-1',
  templateUrl: './custom-comp-1.component.html',
  styleUrls: ['./custom-comp-1.component.css'],
  standalone:true
})
export class CustomCompComponent1 implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';
import { CustomCompComponent1 } from '../custom-comp-1/custom-comp-1.component';

@Component({
  selector: 'app-form-render',
  templateUrl: './form-render.component.html',
  styleUrls: ['./form-render.component.css'],
  standalone:true,
  imports:[
    
  ]
})
export class FormRenderComponent implements OnInit {

  @ContentChild('customComp1') customCompEl:CustomCompComponent1

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('from form render, listing custom comps >> ', this.customCompEl)
  }

}
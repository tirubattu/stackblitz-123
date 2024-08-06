import { Component, OnInit } from '@angular/core';
import { FormRenderComponent } from '../form-render-comp/form-render.component';
import { CustomCompComponent1 } from '../custom-comp-1/custom-comp-1.component';

@Component({
  selector: 'app-form-render-custom-app',
  templateUrl: './custom-app.component.html',
  styleUrls: ['./custom-app.component.css'],
  standalone:true,
  imports:[
    FormRenderComponent,
    CustomCompComponent1
  ]
})
export class CustomAppComponentFormRender implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
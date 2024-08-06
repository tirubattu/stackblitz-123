import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../content-child-decorator/child/child.component';
import { ContentChildDecoratorExampleComponent } from '../content-child-decorator/content-child-decorator-example/content-child-decorator-example.component';
import { CustomAppComponentFormRender } from '../form-render/custom-app/custom-app.component';
import { HighlightDirective } from '../custom-directive/highlight-field.directive';
import { Rendering2DirectiveDirective } from '../custom-directive/rendering2-directive.directive';
import { NgContentExmpComponent } from '../content-projection/ng-content-exmp/ng-content-exmp.component';
import { PropertyBindingDirective } from '../custom-directive/property-binding.directive';
import { TemplateDriven1Component } from '../forms/template-driven/template-driven-1/template-driven-1.component';
import { RxjsComponent } from '../Rxjs/rxjs1/rxjs.component';


@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css'],
  imports:[
    ContentChildDecoratorExampleComponent,
    CustomAppComponentFormRender,
    HighlightDirective,
    Rendering2DirectiveDirective,
    NgContentExmpComponent,
    PropertyBindingDirective,
    TemplateDriven1Component,
    RxjsComponent
  ],
  standalone:true  
})
export class ExamplesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
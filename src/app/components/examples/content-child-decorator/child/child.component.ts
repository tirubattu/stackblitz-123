import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  standalone:true
})
export class ChildComponent implements OnInit {

  @ContentChild('para') paraEl:ElementRef

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    console.log('from child comp >> ', this.paraEl)
  }

}
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor(private element: ElementRef) {}

  ngOnInit() {}

  @HostListener('mouseover')
  onMouseOver() {
    this.element.nativeElement.style.backgroundColor = '#FF0000';
    console.log('Mouse over');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = '#FFFFFF';
    console.log('Mouse Leave');
  }
}

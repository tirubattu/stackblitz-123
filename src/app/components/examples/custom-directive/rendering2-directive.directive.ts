import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendering2Directive]',
  standalone:true
})
export class Rendering2DirectiveDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }

  @HostListener('mouseover')
  onMouseOver() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#FF0000');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#FFFFFF');
  }

}
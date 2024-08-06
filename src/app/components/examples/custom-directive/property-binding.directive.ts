import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appPropertyBinding]',
  standalone:true
})
export class PropertyBindingDirective {
  @Input() backgroundColor : String;
  @Input() color: String;
  constructor(private element:ElementRef, private renderer:Renderer2) {
    
  }

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor',this.backgroundColor);
    this.renderer.setStyle(this.element.nativeElement, 'color',this.color);
  }
}

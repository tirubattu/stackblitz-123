import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHostBindExample]',
  standalone: true,
})
export class HostBindExampleDirective {
  @HostBinding('value') inputVal: string = 'Hello';

  constructor() {}
}

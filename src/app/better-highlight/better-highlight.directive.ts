import { Directive, Renderer2, ngOnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements ngOnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
ngOnInit(){
  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', )
}
}

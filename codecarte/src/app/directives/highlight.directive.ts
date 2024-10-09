import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  // to Catch Element to change / enhance
  // el: ElementRef;
  // constructor(el: ElementRef) {
  //   this.el = el;
  // }

  // SHORTER WAY 
  constructor(private el: ElementRef) { }



  // DECORATIVES
  @HostBinding('style.backgroundColor')
  bgColor = 'tomato';

  @HostListener('mouseenter')
  changeFontSize() {
    console.log('mouse enter');
    this.el.nativeElement.style.fontSize = "50px";
  }
  @HostListener('mouseleave')
  resetFontSize() {
    console.log('mouse leaving');
     this.el.nativeElement.style.fontSize = "30px";
  }
}

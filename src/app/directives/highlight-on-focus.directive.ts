import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {

  @Input('appHighlightOnFocus') appHoverHighlight = '';

  constructor(private el: ElementRef) {
  }

  @HostListener('focus') onMouseEnter() {
    this.highlight(this.appHoverHighlight || 'yellow');
  }

  @HostListener('blur') onMouseLeave() {
    this.highlight('');

  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}


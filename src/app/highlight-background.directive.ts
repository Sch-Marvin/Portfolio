import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightBackground]'
})
export class HighlightBackgroundDirective {
  @Input('appHighlightBackground') backgroundImage!: string; // Bekommt das Bild aus HTML

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  onClick() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundImage', `url(${this.backgroundImage})`);
    this.renderer.setStyle(this.el.nativeElement, 'backgroundSize', 'cover');
    this.renderer.setStyle(this.el.nativeElement, 'backgroundPosition', 'center');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '10px'); // Falls Padding nötig ist
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'background 0.5s ease-in-out');
  }
}

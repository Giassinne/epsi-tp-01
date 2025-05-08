import { Directive, ElementRef, Renderer2, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnChanges {
  @Input() appHighlight: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Méthode qui est appelée à chaque fois que l'input change
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appHighlight']) {
      this.applyStyles();
    }
  }

  private applyStyles(): void {
    if (this.appHighlight) {
      // Applique les styles
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    } else {
      // Enlève les styles
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
      this.renderer.removeStyle(this.el.nativeElement, 'font-weight');
    }
  }
}

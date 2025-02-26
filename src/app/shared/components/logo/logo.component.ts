import {
  Component,
  Input,
  ElementRef,
  AfterViewInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-logo',
  template:
    '<div class="logo-container" (click)="$event.stopPropagation()"></div>',
  standalone: true,
})
export class LogoComponent implements AfterViewInit {
  @Input() src!: string;
  @Input() text: string = 'CONVERTER';
  @Input() width: string = '50';
  @Input() height: string = '50';
  @Input() color: string = '#4f46e5';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit() {
    if (!this.src) return;

    const container = this.el.nativeElement;
    this.renderer.setStyle(container, 'display', 'flex');
    this.renderer.setStyle(container, 'alignItems', 'center');
    this.renderer.setStyle(container, 'justifyContent', 'center');
    this.renderer.setStyle(container, 'gap', '8px');
    this.renderer.setStyle(container, 'cursor', 'pointer');

    fetch(this.src)
      .then((res) => res.text())
      .then((data) => {
        const svgWrapper = this.renderer.createElement('div');
        this.renderer.setProperty(svgWrapper, 'innerHTML', data);
        const svg = svgWrapper.querySelector('svg');

        if (svg) {
          this.renderer.setAttribute(svg, 'width', this.width);
          this.renderer.setAttribute(svg, 'height', this.height);
          this.renderer.setAttribute(svg, 'fill', this.color);
        }
        this.renderer.appendChild(container, svgWrapper);
      })
      .catch((err) => console.log('Error loading svg: ', err));

    if (this.text) {
      const textElement = this.renderer.createElement('span');
      this.renderer.setProperty(textElement, 'innerText', this.text);
      this.renderer.setStyle(textElement, 'color', this.color);
      this.renderer.setStyle(textElement, 'fontSize', '18px');
      this.renderer.setStyle(textElement, 'fontWeight', '600');
      this.renderer.appendChild(container, textElement);
    }
  }
}

import { Injectable, Renderer2, RendererFactory2, signal } from '@angular/core';
import { TTheme } from './types';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private theme = signal<TTheme>('light');

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    const savedTheme = localStorage.getItem('theme') as TTheme | null;
    if (savedTheme) {
      this.setHeme(savedTheme);
    }
  }

  setHeme(theme: TTheme) {
    this.theme.set(theme);
    localStorage.setItem('theme', theme);

    const htmlElement = document.documentElement;

    if (theme === 'dark') {
      this.renderer.addClass(htmlElement, 'dark');
    } else {
      this.renderer.removeClass(htmlElement, 'dark');
    }
  }

  getTheme(): TTheme {
    return this.theme();
  }
}

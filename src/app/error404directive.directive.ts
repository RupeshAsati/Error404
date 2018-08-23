import { Directive,Renderer,ElementRef } from '@angular/core';
import{ BrowserModule} from '@angular/platform-browser'
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


@Directive({
  selector: '[appError404directive]'
})
export class Error404directiveDirective {

  constructor(private el: ElementRef,private renderer: Renderer) { 
      renderer.setElementStyle(el.nativeElement, 'font-size', 'x-large');
      renderer.setElementStyle(el.nativeElement, 'font-weight', 'bold');
      renderer.setElementStyle(el.nativeElement, 'color', 'blue');
      }
  }


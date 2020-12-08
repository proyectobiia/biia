import { AfterViewInit, Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Directive({
  selector: '[willappear]'
})
export class NavbarDirective implements AfterViewInit, OnDestroy{
  @Output() willappear: EventEmitter<void>;

    elementPos: number;
    elementHeight: number;

    scrollPos: number;
    windowHeight: number;

    subscriptionScroll: Subscription;
    subscriptionResize: Subscription;

  constructor(private element: ElementRef) {
    this.willappear = new EventEmitter<void>();
    
   }

  checkVisibility() {
      if (this.isVisible()) {
          // double check dimensions (due to async loaded contents, e.g. images)
          if (this.isVisible()) {
            console.log(this.isVisible())
              this.unsubscribe();
              this.willappear.emit();
          }
      }
  }
  isVisible() {
      const rect = this.element.nativeElement.getBoundingClientRect();
      return (
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
      //return this.scrollPos >= this.elementPos || (this.scrollPos + this.windowHeight) >= (this.elementPos + this.elementHeight);
  }

  saveDimensions() {

    //this.elementPos = this.getOffsetTop(this.element.nativeElement);
    //this.elementHeight = this.element.nativeElement.offsetHeight;
    this.windowHeight = window.innerHeight;
  }
  saveScrollPos() {
      this.scrollPos = window.scrollY;
  }

  subscribe() {
      this.subscriptionScroll = fromEvent(window, 'scroll').pipe(startWith(null))
          .subscribe(() => {
              this.saveScrollPos();
              this.checkVisibility();
          });
      this.subscriptionResize = fromEvent(window, 'resize').pipe(startWith(null))
          .subscribe(() => {
              this.saveDimensions();
              this.checkVisibility();
          });
  }
  unsubscribe() {
      if (this.subscriptionScroll) {
          this.subscriptionScroll.unsubscribe();
      }
      if (this.subscriptionResize) {
          this.subscriptionResize.unsubscribe();
      }
  }

  ngAfterViewInit() {
      this.subscribe();
  }
  ngOnDestroy() {
      this.unsubscribe();
  }

}

import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appOpacity]'    // attribute (instead of tag) selector. It will be recognised when used on elements WITHOUT the []
})
export class OpacityDirective implements OnInit {
    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2
    ) {}

    ngOnInit(): void {
        this.renderer.listen(this.elementRef.nativeElement, 'mouseenter', () => {
            this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '0.925');
        });

        this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', () => {
            this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '1');
        });
    }
}

import { 
    Directive,
    //ElementRef,
    HostBinding,
    HostListener,
    Input,
    OnInit,
    //Renderer2 
} from "@angular/core";

@Directive({
    selector: '[appOpacity]'    // attribute (instead of tag) selector. It will be recognised when used on elements WITHOUT the []
})
export class OpacityDirective implements OnInit {
    @HostBinding('style.opacity') opacity: number = 1;   // We need an initial value to avoid an error
    // What it does: On the element this directive sits, access the style property and then its subproperty, backgroundColor
    @Input() defaultOpacity: number = 1;
    @Input() hoverOpacity: number = 0.5;

    /*
    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2
    ) {}
    */

    ngOnInit(): void {
        this.opacity = this.defaultOpacity;

        /* One approach is using the renderer to listen to an event

        this.renderer.listen(this.elementRef.nativeElement, 'mouseenter', () => {
            this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', this.hoverOpacity);
        });

        this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', () => {
            this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', this.defaultOpacity);
        });
        */
    }

    // Another two methods to achieve the result are (one with the renderer and one with the @HostBinding):

    @HostListener('mouseenter') mouseover(evendData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', this.hoverOpacity, false, false);
        this.opacity = this.hoverOpacity;
    }

    @HostListener('mouseleave') mouseleave(evendData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', this.defaultOpacity, false, false);
        this.opacity = this.defaultOpacity;
    }
}

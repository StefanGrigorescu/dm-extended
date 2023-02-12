import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if(!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }
  // We get the template and the place in the document where it should be rendered

}

// This example directive can be used as a regular *ngIf directive, but with a reversed condition
/*  ! Important: The custom structural directive needs to have the property to bind with the same name as the directive,
    since there is an auto-generated ng-template when we use the *unless syntax (with the star).
    (see the video somewhere among the last videos in the Directives Course for more information if necessary)
*/

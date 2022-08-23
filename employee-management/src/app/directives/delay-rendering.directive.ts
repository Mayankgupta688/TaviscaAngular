import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[delayRendering]'
})
export default class DelayRenderingDirective {
    constructor(private container: ViewContainerRef, private template: TemplateRef<any>) { }

    ngOnInit() {
        debugger;
        setTimeout(() => {
            this.container.createEmbeddedView(this.template);
        }, 5000)
    }
}
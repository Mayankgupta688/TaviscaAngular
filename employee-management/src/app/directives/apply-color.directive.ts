import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: "[applyColor]"
})
export default class ApplyColorDirective {
    constructor(private element: ElementRef) {
        this.element.nativeElement.style.color = "red";
        this.element.nativeElement.style.border = "1px solid red";
    }
}
import { Component } from "@angular/core";

@Component({
    selector: "app-main",
    template: "<h1>Hello</h1>",
    templateUrl: "./app-main.component.html", 
    styleUrls: ["app-main.component.less"],
    styles: ["h1 { color: grey; border: 1px solid red; padding: 10px }", "h2 { color: aqua }"],
})
export default class AppMainComponent { }
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "convertToSpaces"
})
export default class ConvertUnderscorePipe implements PipeTransform {
    transform(value: string, character: string, otherCharacter: string): string {
        return value.replace(character, " " + otherCharacter + " ");
    }
}
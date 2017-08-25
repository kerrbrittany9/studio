import {Pipe, PipeTransform} from '@angular/core';
import {Teacher} from './teacher.model';

@Pipe({
  name: "style",
  pure: false
})

export class StylePipe implements PipeTransform {

  transform(input: Teacher[], desiredStyle) {
     var output: Teacher[] = [];
     if(desiredStyle === "pauseTeachers") {
       for (var i = 0; i < input.length; i++) {
         if (input[i].style == "hatha") {
           output.push(input[i]);
         }
       }
       return output;
     } else if (desiredStyle === "energyTeachers") {
       for (var i = 0; i < input.length; i++) {
         if (input[i].style == "vinyasa") {
           output.push(input[i]);
         }
       }
       return output;
     } else {
       return input;
     }
   }
}

import {Pipe, PipeTransform} from '@angular/core';
import {Teacher} from './teacher.model';

@Pipe({
  name: "energy",
  pure: false
})


export class EnergyPipe implements PipeTransform {

  transform(input: Teacher[], desiredEnergy) {
    var output: Teacher[] = [];
    if(desiredEnergy === "pauseTeachers") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pace <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredEnergy === "energyTeachers") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pace >= 3) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}

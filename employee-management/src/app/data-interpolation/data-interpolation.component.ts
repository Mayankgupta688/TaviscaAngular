import { Component } from '@angular/core';

@Component({
  selector: 'data-interpolation',
  templateUrl: './data-interpolation.component.html',
  styleUrls: ['./data-interpolation.component.less']
})
export class DataInterpolationComponent { 
  public name: string = "Welcome to TechnoFunnel";
  public employeeData = {
    "id": "26",
    "createdAt": "2019-07-09T18:08:17.841Z",
    "name": "Lyric Metz",
    "avatar": "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg"
  }
}

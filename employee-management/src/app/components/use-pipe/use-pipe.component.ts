import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'use-pipe',
  templateUrl: './use-pipe.component.html',
  styleUrls: ['./use-pipe.component.less']
})
export class UsePipeComponent implements OnInit {

  public userName: string = "Mayank";
  salary: number = 200

  customPipe: string = "Mayank-Gupta"
  customPipe1: string = "Mayank_Gupta"
  customPipe2: string = "Mayank,Gupta"
  constructor() { }

  ngOnInit(): void {
  }

}

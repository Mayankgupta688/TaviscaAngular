import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public route: ActivatedRoute, private router: Router) { 
    debugger;
  }

  navigateToHome() {
    this.router.navigate(['/home'])
  }

  ngOnInit(): void {
  }

}

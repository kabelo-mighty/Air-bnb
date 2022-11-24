import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbaradmin',
  templateUrl: './navbaradmin.component.html',
  styleUrls: ['./navbaradmin.component.scss']
})
export class NavbaradminComponent implements OnInit {

  constructor(private route: Router,) { }

  ngOnInit(): void {
  }

  onClick(){
    console.log('we are logging out')
    localStorage.removeItem("token");
    this.route.navigate(['/'])
  }
}

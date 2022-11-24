import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnbService } from 'src/app/service/bnb.service';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  display: BnbService | undefined;
  constructor(private route: Router,private service:BnbService,private jwtService : JwtService) { }
  tittle:any;
  data1:any;
  init :any;
 
user = {
      user_id: '',
      firstname:'',
      lastname:'',
      email:''

  }

  ngOnInit(): void {

    this.user= this.jwtService.getDetails(localStorage.getItem('token')).data[0];
    this.init = this.user.lastname.charAt(0).toUpperCase();

  }


 

  onClick(){
    console.log('we are logging out')
    localStorage.removeItem("token");
    this.route.navigate(['/'])
  }

}

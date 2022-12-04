import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnbService } from 'src/app/service/bnb.service';
import { JwtService } from 'src/app/service/jwt.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  constructor(private route: Router,private bnbservice:BnbService,private jwtService : JwtService,private spinner: NgxSpinnerService) { }
  tittle:any;
  data1:any;
  init :any;

  nobookingpending:any;
  nomybooking:any;
  nohistory:any;
  cancelbooking:any;

user = {
      user_id: '',
      firstname:'',
      lastname:'',
      email:''

  }

  ngOnInit(): void {

    
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000); 

    this.user= this.jwtService.getDetails(localStorage.getItem('token')).data[0];
    let id=this.user.user_id
    console.log(id)
//count number of bookings 
    this.bnbservice.countmybooking(id).subscribe((data)=>{
      this.nomybooking= data;
      console.log(this.nomybooking)
   
      })
      //count pending booking
      this.bnbservice.countpending(id).subscribe((data)=>{
        this.nobookingpending= data;
        console.log(this.nobookingpending)
     
        })
        //count history
        this.bnbservice.counthistory(id).subscribe((data)=>{
          this.nohistory= data;
          console.log(this.nohistory)
       
          })
          //cancel booking
           
        this.bnbservice.countcancelbooking(id).subscribe((data)=>{
          this.cancelbooking= data;
          console.log(this.cancelbooking)
       
          })

  }


  

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnbService } from 'src/app/service/bnb.service';
import { JwtService } from 'src/app/service/jwt.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.scss']
})
export class DashboardadminComponent implements OnInit {
  customer:any;
  cus=[];

  booking:any;
  bok=[];

  rooming:any;
  rom=[];

  constructor(private route: Router,private bnbservice:BnbService,private jwtService : JwtService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
//spinner
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000); 

    //bookings count
    this.bnbservice.countbooking(this.booking).subscribe(res=>{

      this.booking=res;
      this.bok=this.booking.data;

      console.log(res)
 
  
     })
     //customer count 

     this.bnbservice.countcustomer(this.customer).subscribe(res=>{

      this.customer=res;
      this.cus=this.customer.data;

      console.log(res)
 
  
     })

        //rooms count 

        this.bnbservice.countrooms(this.rooming).subscribe(res=>{

          this.rooming=res;
          this.rom=this.rooming.data;
    
          console.log(res)
     
      
         })
  }

}

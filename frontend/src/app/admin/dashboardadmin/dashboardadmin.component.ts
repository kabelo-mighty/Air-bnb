import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnbService } from 'src/app/service/bnb.service';

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

  constructor(private bnbService:BnbService,private router:Router) { }

  ngOnInit(): void {

    //bookings count
    this.bnbService.countbooking(this.booking).subscribe(res=>{

      this.booking=res;
      this.bok=this.booking.data;

      console.log(res)
 
  
     })
     //customer count 

     this.bnbService.countcustomer(this.customer).subscribe(res=>{

      this.customer=res;
      this.cus=this.customer.data;

      console.log(res)
 
  
     })

        //rooms count 

        this.bnbService.countrooms(this.rooming).subscribe(res=>{

          this.rooming=res;
          this.rom=this.rooming.data;
    
          console.log(res)
     
      
         })
  }

}

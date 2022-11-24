import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnbService } from 'src/app/service/bnb.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})



  export class BookingComponent implements OnInit {
    info:any;
    inf=[];
   
    public isVisible: boolean = false;
   constructor( private bnbService:BnbService,private router:Router) { }
 
   ngOnInit(): void {
    this.bnbService.book(this.info).subscribe(res=>{
 
 
     this.info=res;
     this.inf=this.info.data;
     console.log(this.info);
    
    


    })
 
   }

   viewbook(items:any)
   {
 
    console.log(items.booking_id);
    this.router.navigate(['/bookingview']);
    localStorage.setItem('booking_id',items.booking_id);
 
 
 
   } 

   editbook(items:any)
   {
 
    console.log(items.booking_id);
    this.router.navigate(['/bookingedit']);
    localStorage.setItem('booking_id',items.booking_id);
 
 
 
   }
  
   remove(items:any)
   {
   
    var id=items.booking_id;
    console.log(id);
  
    this.bnbService.archiveBooking(id).subscribe(data => console.log(data))
    if (this.isVisible) { 
      return;
     }
    this.isVisible = true;
    setTimeout(()=> this.isVisible = false,900)

    this.bnbService.book(this.info).subscribe(res=>{
 
 
      this.info=res;
      this.inf=this.info.data;
      console.log(this.info);
     
      
 
     })

     


} 



}

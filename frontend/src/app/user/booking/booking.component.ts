import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnbService } from 'src/app/service/bnb.service';
import { JwtService } from 'src/app/service/jwt.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})



  export class BookingComponent implements OnInit {
    info:any;
    inf=[];
    user = {
      user_id: '',
      firstname:'',
      lastname:'',
      email:''

  }
    public isVisible: boolean = false;
    constructor(private route: Router,private bnbService:BnbService,private jwtService : JwtService,private router:Router,private spinner: NgxSpinnerService) { }
 
   ngOnInit(): void {


    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000); 


    this.user= this.jwtService.getDetails(localStorage.getItem('token')).data[0];
    let id=this.user.user_id
  


    this.bnbService.currentbook(id).subscribe(res=>{
 
 
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

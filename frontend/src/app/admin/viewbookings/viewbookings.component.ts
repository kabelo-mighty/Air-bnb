import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnbService } from 'src/app/service/bnb.service';

@Component({
  selector: 'app-viewbookings',
  templateUrl: './viewbookings.component.html',
  styleUrls: ['./viewbookings.component.scss']
})
export class ViewbookingsComponent implements OnInit {
  info:any;
  inf=[];


  public approveisVisible: boolean = false;
  public cancelisVisible: boolean = false;
  public deleteisVisible: boolean = false;
  constructor(private bnbService:BnbService,private router:Router) { }

  ngOnInit(): void {






    
    this.bnbService.allbooks(this.info).subscribe(res=>{
 
 
      this.info=res;
      this.inf=this.info.data;

      console.log(res)
 
  
     })
  
    }

    delete(del:any)
    {
    
     var id=del.booking_id;
     console.log(id);
   
     this.bnbService.archiveBooking(id).subscribe(data => console.log(data))
     if (this.deleteisVisible) { 
       return;
      }
     this.deleteisVisible = true;
     setTimeout(()=> this.deleteisVisible = false,900)
 
     this.bnbService.book(this.info).subscribe(res=>{
  
  
       this.info=res;
       this.inf=this.info.data;
       console.log(this.info);
      
       
  
      })
 
      
 
 
 } 

 approve(ap:any)
   {
   
    var apid=ap.booking_id;
    console.log(apid);
  
    this.bnbService.approvebooking(apid).subscribe(data => console.log(data))
    if (this.approveisVisible) { 
      return;
     }
    this.approveisVisible = true;
    setTimeout(()=> this.approveisVisible = false,1500)

    this.bnbService.book(this.info).subscribe(res=>{
 
 
      this.info=res;
      this.inf=this.info.data;
      console.log(this.info);
     
      
 
     })

     


}

cancel(items:any)
{

 var id=items.booking_id;
 console.log(id);

 this.bnbService.cancelBooking(id).subscribe(data => console.log(data))
 if (this.cancelisVisible) { 
   return;
  }
 this.cancelisVisible = true;
 setTimeout(()=> this.cancelisVisible = false,900)

 this.bnbService.book(this.info).subscribe(res=>{


   this.info=res;
   this.inf=this.info.data;
   console.log(this.info);
  
   

  })

  


} 




  }

  


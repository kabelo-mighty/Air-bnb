import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnbService } from 'src/app/service/bnb.service';
import { JwtService } from 'src/app/service/jwt.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  info:any;
  inf=[];
  user = {
    user_id: '',
    firstname:'',
    lastname:'',
    email:''

}
  constructor(private route: Router,private bnbService:BnbService,private jwtService : JwtService,private router:Router,private spinner: NgxSpinnerService) { }
 

  ngOnInit(): void {

    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
    
    this.user= this.jwtService.getDetails(localStorage.getItem('token')).data[0];
    let id=this.user.user_id
  


    this.bnbService.usernotification(id).subscribe(res=>{
 
 
     this.info=res;
     this.inf=this.info.data;
     console.log(this.info);
    
    


    })


  }
  read(id:any)
  {
  
   var id=id.booking_id;
 
 
   this.bnbService.readmessage(id).subscribe(data => console.log(data))
  //  if (this.approveisVisible) { 
  //    return;
  //   }
  //  this.approveisVisible = true;
  //  setTimeout(()=> this.approveisVisible = false,1500)

  this.bnbService.usernotification(id).subscribe(res=>{
 
 
    this.info=res;
    this.inf=this.info.data;
    console.log(this.info);
   
   })

    


}

}

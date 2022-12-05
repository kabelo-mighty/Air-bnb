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
  q:any;
  user = {
    user_id: '',
    firstname:'',
    lastname:'',
    email:''

}
public isVisible: boolean = false;
constructor( private bnbService:BnbService,private router:Router,private jwtservice:JwtService,private spinner: NgxSpinnerService) { }


  ngOnInit(): void {

    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
    
    this.user= this.jwtservice.getDetails(localStorage.getItem('token')).data[0];
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
   setTimeout(()=> location.reload(),1750)
   if (this.isVisible) { 
     return;
    }
   this.isVisible = true;
   setTimeout(()=> this.isVisible = false,1500)
  

  
  // this.bnbService.usernotification(id).subscribe(res=>{
  //   this.info=res;
  //   this.inf=this.info.data;
  //   console.log(this.info);
   
  //  })

    


}

}

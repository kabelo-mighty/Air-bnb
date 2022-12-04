import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BnbService } from 'src/app/service/bnb.service';
import { JwtService } from 'src/app/service/jwt.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
   info:any;
   inf=[];
  q:any;

  constructor( private bnbService:BnbService,private router:Router,private jwtservice:JwtService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000);

   this.bnbService.rooms(this.info).subscribe(res=>{

 


    this.info=res;
    this.inf=this.info.data;
console.log(res);

   })

  }

  viewroom(items:any)
  {
   localStorage.setItem('room_id',items.room_id);
   localStorage.setItem('user_id',this.jwtservice.getDetails(localStorage.getItem('token')).data[0].user_id);
   console.log(localStorage.getItem('room_id')+'+'+localStorage.getItem('user_id'));
   this.router.navigate(['/roombookin']);



  }  



}

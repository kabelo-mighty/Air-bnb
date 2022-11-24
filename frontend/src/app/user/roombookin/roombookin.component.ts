
import { BnbService } from 'src/app/service/bnb.service';
import { Component, OnChanges, DoCheck, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roombookin',
  templateUrl: './roombookin.component.html',
  styleUrls: ['./roombookin.component.scss']
})
export class RoombookinComponent implements OnInit {
  
  checkin='';
  date:string="";
  Books:any;
  yyyy : any = new Date().getFullYear();
  mm : any = new Date().getMonth()+1;
  dd : any = new Date().getDate();
Rooms:any;



booking={
room_id:'',
user_id:'',
checkin:'',
checkout:''
}
public isVisible: boolean = false;
constructor(private bnbservice:BnbService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {

  let id=localStorage.getItem('room_id');

  this.bnbservice.currentRoom(id).subscribe((data)=>{
   this.Rooms= data;
   console.log(this.Rooms)

   })
  }


  ngDoCheck() {
    console.log('Running change detection ', Date.now());
  }
  
  onSubmit(data:any){

    this.booking.checkin = data.value.checkin;
    this.booking.checkout = data.value.checkout;
    this.booking.room_id = JSON.stringify(localStorage.getItem('room_id'));
    this.booking.user_id = JSON.stringify(localStorage.getItem('user_id'));
 

    this.http.post('http://localhost:3000/makeBooking/',this.booking)
    .subscribe((results)=>{
  if (this.isVisible) { 
          return;
        } 
        this.isVisible = true;
        setTimeout(()=> this.isVisible = false,850)


      })
    
    }
}

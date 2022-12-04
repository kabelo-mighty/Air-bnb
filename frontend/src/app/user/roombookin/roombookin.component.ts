
import { BnbService } from 'src/app/service/bnb.service';
import { Component, OnChanges, DoCheck, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-roombookin',
  templateUrl: './roombookin.component.html',
  styleUrls: ['./roombookin.component.scss']
})
export class RoombookinComponent implements OnInit {

  checkin='';
  checkout='';
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
//spinner
typeSelected:string;

public isVisible: boolean = false;

constructor(private bnbservice:BnbService,private http:HttpClient,private router:Router,private spinner: NgxSpinnerService) {

  this.typeSelected = 'ball-fussion';
 }

  ngOnInit(): void {
    
 
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000); 


  let id=localStorage.getItem('room_id');



  this.date = this.yyyy+"-"+ this.mm + "-" +this.dd;
  console.log(this.dd)

  

  this.bnbservice.currentRoom(id).subscribe((data)=>{
   this.Rooms= data;
   console.log(this.Rooms)

   })
  }


  ngDoCheck() {
    //console.log('Running change detection ', Date.now());
  }
  
  onSubmit(data:any){

 let rId= this.booking.room_id = JSON.stringify(localStorage.getItem('room_id'));
 let UId= this.booking.room_id = JSON.stringify(localStorage.getItem('user_id'));




    var bookroom={
      "user_id":localStorage.getItem('user_id'),
      "room_id":localStorage.getItem('room_id'),
      "checkin":data.checkin,
      "checkout":data.checkout
    }

   console.log(bookroom)

    this.http.post('http://localhost:3000/makeBooking',bookroom,{responseType:'text'})
    .subscribe((results)=>{
  if (this.isVisible) { 
          return;
        } 

  
        this.isVisible = true;
        setTimeout(()=> this.isVisible = false,1500)
        setTimeout(()=> this.router.navigate(['/booking']),1600)

      })
    
    }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BnbService } from 'src/app/service/bnb.service';

@Component({
  selector: 'app-viewroom',
  templateUrl: './viewroom.component.html',
  styleUrls: ['./viewroom.component.scss']
})


  export class ViewroomComponent implements OnInit {
    info:any;
    inf=[];
    q:any;
    public isVisible: boolean = false;
   constructor( private bnbService:BnbService,private router:Router,private spinner: NgxSpinnerService) { }
 
   ngOnInit(): void {


     //spinner
     this.spinner.show();

     setTimeout(() => {
       this.spinner.hide();
     }, 5000); 

    this.bnbService.rooms(this.info).subscribe(res=>{
 
 
     this.info=res;
     this.inf=this.info.data;

 
    })
 
   }
 
 
  
  delete(items:any){

  var id=items.room_id;
  
    this.bnbService.removeroom(id).subscribe(data => console.log(data))
    if (this.isVisible)  {
      return;
     }
    this.isVisible = true;
    setTimeout(()=> this.isVisible = false,3000)
    this.bnbService.rooms(this.info).subscribe(res=>{
      this.info=res;
      this.inf=this.info.data; 
 
     })
    }
     
  edit(items:any){
  
     console.log(items.room_id);
     this.router.navigate(['/editroom']);
     localStorage.setItem('room_id',items.room_id);
  
    
    }
 
 
 }
 

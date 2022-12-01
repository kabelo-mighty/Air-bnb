import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BnbService } from 'src/app/service/bnb.service';
import { Component, OnChanges, DoCheck, OnInit } from '@angular/core';
@Component({
  selector: 'app-bookingedit',
  templateUrl: './bookingedit.component.html',
  styleUrls: ['./bookingedit.component.scss']
})
export class BookingeditComponent implements OnInit {
  date:string="";

  yyyy : any = new Date().getFullYear();
  mm : any = new Date().getMonth()+1;
  dd : any = new Date().getDate();
  checkin = '';


  public isVisible: boolean = false;
  
    

    constructor(private bnbservice:BnbService,private http:HttpClient,private router:Router) { }
   Books:any;

    ngOnInit(): void {

  

      this.date = this.yyyy+"-"+ this.mm + "-" + this.dd;
     // console.log(this.date )
  
    let id=localStorage.getItem('booking_id');
  
    this.bnbservice.viewbook(id).subscribe((data)=>{
     this.Books= data;
     console.log(this.Books)
  
     })


    }

    ngDoCheck() {
      console.log('Running change detection ', Date.now());
    }

    onSubmit(data:any){

      let id=localStorage.getItem('booking_id');
     
      this.http.put('http://localhost:3000/updateDate/'+id,data, {responseType:'text'})
      .subscribe((results)=>{
  
        this.bnbservice.viewbook(id).subscribe((data)=>{
          this.Books= data;
          console.log(this.Books)


          if (this.isVisible) { 
            return;
          } 
          this.isVisible = true;
          setTimeout(()=> this.isVisible = false,850)
       
          })
  
        })
      
      }


    

}
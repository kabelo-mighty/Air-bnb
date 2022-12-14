import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BnbService } from 'src/app/service/bnb.service';

@Component({
  selector: 'app-editroom',
  templateUrl: './editroom.component.html',
  styleUrls: ['./editroom.component.scss']
})
export class EditroomComponent implements OnInit {
  info:any;
  inf=[];

  public isVisible: boolean = false;

  Rooms:any;
  title!: string;
  price!: string;
  description!: string;
  img_url1!: string;
  img_url2!: string; 
  img_url3!: string;
    constructor(private bnbservice:BnbService,private http:HttpClient,private router:Router,private spinner: NgxSpinnerService) { }
  
    ngOnInit(): void {

      //spinner
      this.spinner.show();

      setTimeout(() => {
        this.spinner.hide();
      }, 5000); 

    let id=localStorage.getItem('room_id');
  
    this.bnbservice.currentRoom(id).subscribe((data)=>{
     this.Rooms= data;
     console.log(this.Rooms)

     })
  


    }

  

    onSubmit(data:any){

      let id=localStorage.getItem('room_id');
      this.http.put('http://localhost:3000/updateroom/'+id,data, {responseType:'text'})
      .subscribe((results)=>{
  
        this.bnbservice.viewbook(id).subscribe((data)=>{
          this.Rooms= data;
          console.log(this.Rooms)


          if (this.isVisible) { 
            return;
          } 
          this.isVisible = true;
          setTimeout(()=> this.isVisible = false,850)
       
          })
  
        })
        setTimeout(()=> this.router.navigate(['/viewroom']),1500)
      
      }


    

}


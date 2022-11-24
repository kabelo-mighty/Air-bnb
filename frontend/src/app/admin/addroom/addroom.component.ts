import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnbService } from 'src/app/service/bnb.service';
@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.scss']
})
export class AddroomComponent implements OnInit {
  info:any;
  inf=[];


  public isVisible: boolean = false;
 
  title: any;
  price: any;
  description: any;
  img_url: any;
  constructor(private bnbService:BnbService,private  http:HttpClient,private router:Router) { }

  ngOnInit(): void {

  }
  onSubmit(data:any){

    
    //Add the room to the Database
    this.http.post('http://localhost:3000/addroom',data, {responseType:'text'})
    .subscribe((results)=>{
        this.bnbService.rooms(this.info).subscribe(res=>{
          this.info=res;
          this.inf=this.info.data; 

          this.isVisible = true;
         setTimeout(()=> this.isVisible = false,1000)
      
       
         })
         
         this.title='';
         this.price='';
         this.description='';
         this.img_url='';

         setTimeout(()=> this.router.navigate(['/viewroom']),1500)

      })
     
    }
}

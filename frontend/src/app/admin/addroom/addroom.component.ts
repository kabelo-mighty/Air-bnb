import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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
  img_url1: any;
  img_url2: any;
  img_url3: any;
  constructor(private bnbService:BnbService,private  http:HttpClient,private router:Router,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    //spinner
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000); 

  }
  onSubmit(data:any){

    
    //Add the room to the Database
    this.http.post('http://localhost:3000/addroom',data, {responseType:'text'})
    .subscribe((results)=>{

      console.log(data)
        this.bnbService.rooms(this.info).subscribe(res=>{
          this.info=res;
          this.inf=this.info.data; 

          this.isVisible = true;
         setTimeout(()=> this.isVisible = false,1000)
      
       
         })
         
         this.title='';
         this.price='';
         this.description='';
         this.img_url1='';
         this.img_url2='';
         this.img_url3='';

         setTimeout(()=> this.router.navigate(['/viewroom']),1500)
         console.log(data)

      })
     
    }
}

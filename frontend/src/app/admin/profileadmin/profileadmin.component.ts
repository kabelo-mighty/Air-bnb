import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnbService } from 'src/app/service/bnb.service';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-profileadmin',
  templateUrl: './profileadmin.component.html',
  styleUrls: ['./profileadmin.component.scss']
})
export class ProfileadminComponent implements OnInit {
  person:any;
  public isVisible: boolean = false;
  constructor(private route: Router,private bnbservice:BnbService,private jwtService : JwtService,private http:HttpClient) { }
  user = {
    user_id: '',
    firstname:'',
    lastname:'',
    email:''

}
  ngOnInit(): void {

    this.user= this.jwtService.getDetails(localStorage.getItem('token')).data[0];
    let id=this.user.user_id

    this.bnbservice.currentUser(id).subscribe((data)=>{
      this.person= data;
      console.log(this.person)
   
      })
  }

  onSubmit(data:any){

    let id=this.user.user_id
   console.log(id)
   console.log(data)

   this.http.put('http://localhost:3000/updateprofile/'+id,data, {responseType:'text'})
    .subscribe((results)=>{

      this.bnbservice.currentUser(id).subscribe((data)=>{
        this.person= data;
        console.log(this.person)


        if (this.isVisible) { 
          return;
        } 
        this.isVisible = true;
        setTimeout(()=> this.isVisible = false,850)
     
        })

      })
    
    }
  }

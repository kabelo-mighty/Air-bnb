import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BnbService } from '../service/bnb.service';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtService } from '../service/jwt.service';
import { GuardService } from '../service/guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model:any = {}
  userForm: any;
  private _auth: any;
  public isVisible: boolean = false;
  public Visible: boolean = false;
  guardService: any;


  user = {
    user_id: '',
    firstname:'',
    lastname:'',
    email:''

}
  constructor(private http:HttpClient,private formBuilder: FormBuilder,private router:Router, private jwtService : JwtService,private guardservice : GuardService) { }

  ngOnInit(): void {




  
  }
 
  
  onSubmit(data:any){
   //check
    //connect to server
    this.guardservice.login();


    this.http.post('http://localhost:3000/login',data)
    .subscribe((results:any)=>{

      localStorage.setItem('token',results.token);

      
 
    if(results.token!=null){

    this.user= this.jwtService.getDetails(localStorage.getItem('token')).data[0];
    let id=this.user.user_id
    console.log(id);
      
     if(this.user.user_id < '3')
     {


      if(this.isVisible) { 
        return;
      } 
      this.isVisible = true;
      setTimeout(()=> this.isVisible = false,850)

      setTimeout(()=> this.router.navigate(['/dashboardadmin']),900)

     }else
     {

     
      
      if(this.isVisible) { 
        return;
      } 
      this.isVisible = true;
      setTimeout(()=> this.isVisible = false,850)

      setTimeout(()=> this.router.navigate(['/dashboard']),900)


     }
       
       
      }
      else{
       //
       
       this.Visible = true;
       setTimeout(()=> this.Visible = false,850)
 
       setTimeout(()=> this.router.navigate(['/login']),900)
       console.warn(results)
      }
      
    })
   




 
  }

}
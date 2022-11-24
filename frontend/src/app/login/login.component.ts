import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BnbService } from '../service/bnb.service';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtService } from '../service/jwt.service';

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
  constructor(private http:HttpClient,private formBuilder: FormBuilder,private router:Router, private jwtService : JwtService) { }

  ngOnInit(): void {




  
  }
 
  
  onSubmit(data:any){
   //check
    //connect to server
    this.http.post('http://localhost:3000/login',data)
    .subscribe((results:any)=>{

      localStorage.setItem('token',results.token);
 
      
      // if (res.status) { 
       
      //   this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));  
      //   this._auth.setDataInLocalStorage('token', res.token);  
      //   this.router.navigate(['dashboard']);
      // }
 
      if(results.token!=null){
      
       //alert('succesfully loged in')
       if(this.isVisible) { 
        return;
      } 
      this.isVisible = true;
      setTimeout(()=> this.isVisible = false,850)

      setTimeout(()=> this.router.navigate(['/dashboard']),900)

       //console.warn(results)
       //localStorage.setItem("secret",results);
       
       
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
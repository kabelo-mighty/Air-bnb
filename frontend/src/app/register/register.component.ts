import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BnbService } from '../service/bnb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  public isVisible: boolean = false;


  constructor(private  http:HttpClient, private router:Router) { }

  ngOnInit(): void {

  }

  onSubmit(data:any){

    
    //Add the User to the Database
    this.http.post('http://localhost:3000/register',data, {responseType:'text'})
    .subscribe((results)=>{


      if (this.isVisible) { 
        return;
      } 
      this.isVisible = true;
      setTimeout(()=> this.isVisible = false,850)

      setTimeout(()=> this.router.navigate(['/login']),900)
      // if(results == 'Account created succesfully!'){

      //   this.router.navigate([''])
      //   alert(results)
        
      //   console.warn(results)
      //  }
      //  else{
      //   alert(results)
      //   console.warn(results)
      //  }

      })
    }
  }





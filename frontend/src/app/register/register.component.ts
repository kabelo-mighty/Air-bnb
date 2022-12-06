import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BnbService } from '../service/bnb.service';
import { Router } from '@angular/router';
import Validation from './validation';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  




  form: FormGroup = new FormGroup({
    firstname: new FormControl(''),
   lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  submitted = false;


  public isVisible: boolean = false;


  constructor(private  http:HttpClient, private router:Router,private formBuilder: FormBuilder, private toast : NgToastService ) { }

  ngOnInit(): void {


    this.form = this.formBuilder.group(
      {
        firstname: ['', [Validators.required,
                    Validators.minLength(3)]
                  ],
        
        lastname: [
          '',
          [
            Validators.required,
           Validators.minLength(3)
           // Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );

  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(data:any){

    this.submitted = true;
    //Add the User to the Database
    this.http.post('http://localhost:3000/register',data, {responseType:'text'})
    .subscribe((results)=>{

      if(results == 'Account created succesfully!')
      {
        this.openSucess();
        this.router.navigate(['/login'])
      }
      else
      {
        this.openWarning()
        this.router.navigate(['/register'])
      }
    
      if (this.isVisible) { 
     
        return;
      } 
   


      }
      ,(err)=>{
        this.openWarning();
      }
      )
      
    }
  
  
    openSucess(){
      this.toast.success({detail:"Warning", summary:"Succesfully Registered"})
    }

    openWarning(){
      this.toast.warning({detail:"Warning",summary:'Email already exist', duration:2000})
    }
  // onSubmit(data:any){
  //   //check
  // this.submitted = true;
   
  //   //Add the User to the Database
  //   this.http.post('http://localhost:3000/register',data, {responseType:'text'})
  //   .subscribe((results)=>{


  //     if (this.isVisible) { 
  //       return;
  //     } 
  //     this.isVisible = true;
  //     setTimeout(()=> this.isVisible = false,850)

  //     setTimeout(()=> this.router.navigate(['/login']),900)

  //     })
  //   }
  }





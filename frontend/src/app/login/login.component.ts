import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BnbService } from '../service/bnb.service';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtService } from '../service/jwt.service';
import { GuardService } from '../service/guard.service';
import Validation from '../register/validation';
import { NgToastService } from 'ng-angular-popup';

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


  form: FormGroup = new FormGroup({
   
    email: new FormControl(''),
    password: new FormControl('')
  });


  submitted = false;

  user = {
    user_id: '',
    firstname:'',
    lastname:'',
    email:''

}
  constructor(private http:HttpClient,private formBuilder: FormBuilder,private router:Router, private jwtService : JwtService,private guardservice : GuardService, private toast : NgToastService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
     
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
           
            Validators.maxLength(40)
          ]
        ],
        
      
      },
      
    );



  
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  

  onSubmit(data:any){
    //check
    this.submitted = true;
     //connect to server
     this.guardservice.login();
 
     
 
     this.http.post('http://localhost:3000/login',data)
     .subscribe((results:any)=>{
      console.log(results);
 
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
       this.toast.success({detail:"Success",summary:'Admin Loggedin Succesfully', duration:2000})
       setTimeout(()=> this.router.navigate(['/dashboardadmin']),900)
 
      }else
      {
       if(this.isVisible) { 
         return;
       }
       this.isVisible = false;
       setTimeout(()=> this.isVisible = false,850)
       this.openSucess();
       setTimeout(()=> this.router.navigate(['/dashboard']),900)
      
     }
        
       }
       else{
        
        setTimeout(()=> this.Visible = true,850)
        
        setTimeout(()=> this.router.navigate(['/login']),900)
        this.Visible = false;
        console.warn(results)
        this.toast.warning({detail:"Warning",summary:'Email does not exist'})
     
       }
       
     },(err)=>{
      this.openWarning();
    })
 
 
 }
 
 
     openSucess(){
       this.toast.success({detail:"Warning", summary:"Succesfully Login"})
     }
 
     openWarning(){
       this.toast.warning({detail:"Warning",summary:'Invalid email or password', duration:2000})
     }
 
  // onSubmit(data:any){
  //  //check
  //  this.submitted = true;
  //   //connect to server
  //   this.guardservice.login();


  //   this.http.post('http://localhost:3000/login',data)
  //   .subscribe((results:any)=>{

  //     localStorage.setItem('token',results.token);

      
 
  //   if(results.token!=null){

  //   this.user= this.jwtService.getDetails(localStorage.getItem('token')).data[0];
  //   let id=this.user.user_id
  //   console.log(id);
      
  //    if(this.user.user_id < '3')
  //    {


  //     if(this.isVisible) { 
  //       return;
  //     } 
  //     this.isVisible = true;
  //     setTimeout(()=> this.isVisible = false,850)

  //     setTimeout(()=> this.router.navigate(['/dashboardadmin']),900)

  //    }else
  //    {

     
      
  //     if(this.isVisible) { 
  //       return;
  //     } 
  //     this.isVisible = true;
  //     setTimeout(()=> this.isVisible = false,850)

  //     setTimeout(()=> this.router.navigate(['/dashboard']),900)


  //    }
       
       
  //     }
  //     else{
  //      //
       
  //      this.Visible = true;
  //      setTimeout(()=> this.Visible = false,850)
 
  //      setTimeout(()=> this.router.navigate(['/login']),900)
  //      console.warn(results)
  //     }
      
  //   })
   




 
  // }

}
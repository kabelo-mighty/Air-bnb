import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BnbService } from 'src/app/service/bnb.service';
import { JwtService } from 'src/app/service/jwt.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  form: FormGroup = new FormGroup({
    firstname: new FormControl(''),
   lastname: new FormControl('')
   
  });
  submitted = false;

  person:any;
  public isVisible: boolean = false;
  constructor(private router: Router,private bnbservice:BnbService,private jwtService : JwtService,private http:HttpClient,private formBuilder: FormBuilder, private toast : NgToastService,private spinner: NgxSpinnerService) { }

  user = {
    user_id: '',
    firstname:'',
    lastname:''

}
  ngOnInit(): void {
     
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000);

    this.form = this.formBuilder.group(
      {
        firstname: ['', [Validators.required,
                    Validators.minLength(3),Validators.pattern("^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$")]
                  ],
        
        lastname: [
          '',
          [
            Validators.required,
           Validators.minLength(3)
           ,Validators.pattern("^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$")
           // Validators.maxLength(20)
          ]
        ]
       
      }
    );
    this.user= this.jwtService.getDetails(localStorage.getItem('token')).data[0];
    let id=this.user.user_id

    this.bnbservice.currentUser(id).subscribe((data)=>{
      this.person= data;
      console.log(this.person)
   
      })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(data:any){

    this.submitted = true;


    if(data.firstname!="" && data.lastname!=""){

      
      let id=this.user.user_id
      console.log(id)
      console.log(data)
   
      this.http.put('http://localhost:3000/updateprofile/'+id,data, {responseType:'text'})
       .subscribe((results)=>{
   
         this.bnbservice.currentUser(id).subscribe((data)=>{
           this.person= data;
           console.log(this.person)
   
   
           this.toast.success({detail:"Success",summary:'Profile updated successfully', duration:2000})
           setTimeout(()=> this.router.navigate(['/profile']),1600)
   
         })
       
       })


    }  




}
}

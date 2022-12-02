export class GuardService{

  loggedIn : boolean = false

  login(){

    this.loggedIn = true
  }

  // logout(){
  //   this.loggedIn = false
  // }

  IsAuthenticated(){

    if(sessionStorage.getItem('logginToken') != null)
    {
      return true;
    }
    else{
      return false;

    }
   //return this.loggedIn ;
  }
}
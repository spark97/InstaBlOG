import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor( 
    private router : Router 
){}

  title = "InstaBLOG"
  current_user : any ;
  
      checkLoggedIn(){
          console.log("Inside function : AppComponent");
          this.current_user = JSON.parse(localStorage.getItem("currentUser"));
          if(this.current_user){
              console.log('LoggedIn User Exists');
              return ;
          }
          else{
            console.log('No LoggedIn User Exists');
            this.router.navigate(["login"]);
            return ;
          }
      }

}

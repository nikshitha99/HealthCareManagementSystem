import { Component, OnInit } from '@angular/core';
import { DiagnosticServiceService } from '../diagnostic-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  constructor(private service:DiagnosticServiceService,private router:Router ) { }

  ngOnInit(): void {
  }
  onClickSubmit(user)
  {
  console.log(user);
  
    this.service.addAdmin(user).subscribe(
      (success)=>{
        alert("User Successfully Added with user id"+success.userId);
        
      },
      (error)=>{
         alert("User Name or Email or Number Already Exist");
      }
    )    
  }

}

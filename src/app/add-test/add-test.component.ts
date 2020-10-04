import { Component, OnInit } from '@angular/core';
import { DiagnosticServiceService } from '../diagnostic-service.service';
import { Router } from '@angular/router';
import { DiagnosticCenter } from '../DiagnosticCenter';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {
diagnosticCenterList:Array<DiagnosticCenter>=[];
centerId:string;
status:boolean;
  constructor(private diagnostic_service:DiagnosticServiceService,private router:Router) { }

  ngOnInit(): void {
    this.diagnostic_service.getAllCenters().subscribe(
      (data)=>{
          this.diagnosticCenterList=data;   
        })
  }
  onClickSubmit(centerId)
  {          
      this.centerId=centerId;
      this.status=true;
}
addTest1(test){

this.diagnostic_service.addTest(this.centerId,test).subscribe(
  (success)=>{
            alert(success.testId+" is Added Successfully");
            this.ngOnInit();
  },
  (error)=>{
            alert(test.testName+" is Already Exist in Center "+this.centerId);
          this.ngOnInit();
  }
);
}
goBack()
{
  window.history.back();
}

}
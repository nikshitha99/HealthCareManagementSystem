import { Component, OnInit } from '@angular/core';
import { DiagnosticCenter } from '../DiagnosticCenter';
import { DiagnosticServiceService } from '../diagnostic-service.service';
@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.css']
})
export class AddCenterComponent implements OnInit {
center:DiagnosticCenter;
  constructor(private diagnostic_service:DiagnosticServiceService) { }

  ngOnInit(): void {
  }
  onClickSubmit(add)
  {
    
    this.diagnostic_service.addCenter(add).subscribe(
      (success)=>{
        alert("Center With Id : "+ success.centerId+" is added");
      },
      (error)=>{
        alert("Center is Already Exist");
      }
     )
  }
goBack()
{
  window.history.back();
}

}

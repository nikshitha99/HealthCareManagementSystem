import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-operations',
  templateUrl: './admin-operations.component.html',
  styleUrls: ['./admin-operations.component.css']
})
export class AdminOperationsComponent implements OnInit {
status:boolean;
  constructor() { }

  ngOnInit(): void {
  }
  nextPage(){
    window.history.forward();
  }
  previousPage()
  {
    window.history.back();
  }
  statusSetter()
  {
this.status=true;
  }
}

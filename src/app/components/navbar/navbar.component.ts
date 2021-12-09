import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Column, GridOption, Formatters } from 'angular-slickgrid';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
@Output() myevent:EventEmitter<any> = new EventEmitter();

  public selected_index:any ;
  public bottom_array:any =[{name:'Employees',index:0},
  {name:'Companies',index:1}
 ]


 // {name:'Cash Planner'},,{name:'My Customers'},
  constructor(private router:Router) 
  {
   }


   ngOnchanges()
   {
   }
  ngOnInit(): void {


  }
  navselectedClick(index,items){
    if(index == 0){
      this.router.navigate(["/components/employees"])
    }else{
      this.router.navigate(["components/companies"])

    }
   
  }


}

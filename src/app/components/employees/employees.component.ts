import { Component, OnInit } from '@angular/core';
import { Column, GridOption, AngularGridInstance } from 'angular-slickgrid';
import { ApiServices } from 'src/app/services/apiservices';
import * as _ from 'lodash';
import * as numeral from 'numeral';
import { HalfmodalService } from '../halfmodal/halfmodal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

// Slick Grid
defaultPageSize:any = 15;
public dataset:any = [];
ColumDef: Column[] = [];
r_gridOptions: GridOption = {};
gridObj: any;
angularGrid: AngularGridInstance;
dataViewObj: any;
angulargridObj:any
public grididname:any = 'employee';
public DropDownArray:any = [];
public EnteredValue:string = "";
public singleitem:any;

  constructor(private api:ApiServices,public halfmodalservices:HalfmodalService,private router:Router) { 
   
    this.dataset = [];
    this.grididname = "employee";
  }

  ngOnInit(): void {
    this.slickgridOptions();
    this.editwindowcall()
    this.api.employeeapicall().subscribe(response =>{
      console.log(response)
      this.dataset = response;
    })
  }
//SLICK GRID 

slickgridOptions()
{
  this.r_gridOptions = {
    autoResize: {
      containerId: 'demo-containerpurchase',
      // sidePadding:20
    },
    enableAutoResize: true,       // true by default
    // enableCellNavigation: true,
    enableAutoSizeColumns: true,
    enableFiltering: true,
    
    enablePagination: true, // you could optionally disable the Pagination
    pagination: {
      pageSizes: [15,5,10,20, 25, 30, 40, 50, 75, 100],
      pageSize: this.defaultPageSize,
      totalItems: 0
    }, 
    editable:true,
    autoEdit:true,
    // forceFitColumns:true,
    // enableCheckboxSelector: true,
    enableColumnPicker: true,
    asyncEditorLoading: true,
    formatterOptions:{thousandSeparator:'_'},
   

  };
}
editwindowcall()
{
  this.api.JSONcolumoptions('Employee').then(result=>{
    this.ColumDef= result['results'];
  })


}
angularGridReady(angularGrid: AngularGridInstance) {
  this.angularGrid = angularGrid;
  this.angulargridObj = angularGrid.slickGrid;
  this.dataViewObj = angularGrid.dataView;
  this.angularGrid.resizerService.resizeGrid();
  // var dateformat =  (row, cell, value, columnDef, dataContext)=> {
  //   if (value != null) {
  //     var str = value;
  //     var array = str.split('-');
  //     if (array[0] != value) {
  //       return this.$filter.formatDate("dd/mm/yy", new Date(parseInt(array[0]), parseInt(array[1]) - 1, parseInt(array[2].substring(0, 2))));
  //     } else {
  //       return value;
  //     }
  //   } else {
  //     return '';
  //   }

  //  }

   var editformatter = function (row, cell, value, columnDef, dataContext) {

    if (value == "Y")
      return "<div style='text-align:center;cursor:pointer;'><span class='editwndattach Symbol-edit'></span></div>";
    else
      return "<div style='text-align:center;cursor:pointer;'><span class='editwndattach Symbol-edit'></span></div>";
  }
  var deleteformatter = function (row, cell, value, columnDef, dataContext) {
  
    if (value == "Y")
      return "<div style='text-align:center;cursor:pointer;'><span class='editwndattach Symbol-delete'></span></div>";
    else
      return "<div style='text-align:center;cursor:pointer;'><span class='editwndattach Symbol-delete'></span></div>";
  }
  var numericformatter = function (row, cell, value, columnDef, dataContext) {
    if (columnDef.excel) {
      if (!isNaN(parseFloat(value)))
        return parseFloat(value);
      else
        return 0;
    }
    if (!isNaN(parseFloat(value)))
      return numeral(value).format('0,0.00');
    else
      return '0.00';

  };
  _.forEach(this.angulargridObj.getColumns(), (col, index) => {
    
    // if(col.formatter == 'dateformat')
    // {
    //     col.formatter = dateformat
    // }
    if(col.formatter == 'editformatter')
    {
      col.formatter = editformatter
    }
    if(col.formatter == 'deleteformatter')
    {
      col.formatter = deleteformatter
    }
    if(col.formatter == 'numericformatter')
        {
          col.formatter = numericformatter
        }
  });
}
onCellClicked(event,args)
{

  var item = args.grid.getDataItem(args.row);  
  this.singleitem = item;
  console.log(item)  

  if(args.cell == args.grid.getColumnIndex('editattachment'))
  {
      
    //this.halfmodalservices.open("editform");
    this.router.navigate(["/components/updateemp"])
  

  }
  if(args.cell == args.grid.getColumnIndex('deleteattachment'))
  {

      console.log('delete btn clicked')
     this.halfmodalservices.open("ConfirmationModal");
  }
}
closehalfModal(id){

}
deletebtn(){
  console.log(this.singleitem.id);
  this.api.deleteemployee(this.singleitem.id).subscribe(data => {
    console.log(data);
    this.refersh();
  });

}
CancelBtnClicked(id){
  this.halfmodalservices.close(id);
}
searchbutton(){
  this.dataset = [];
  this.api.employeeapicallbyid(this.EnteredValue).subscribe(result =>{
    this.dataset = result;
  })
}
refersh()
{
  this.dataset = [];
  this.api.employeeapicall().subscribe(response =>{
    console.log(response)
    this.dataset = response;
  })
}

public Dropdownselect(){

}
public Dropdownvalueselect(ditems,items){

}
}

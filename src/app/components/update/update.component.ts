import { Component, Input, OnInit } from '@angular/core';
import { ApiServices } from 'src/app/services/apiservices';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  @Input() id:any;

  constructor(private api:ApiServices) { }

  ngOnInit(): void {

    console.log(this.id.id)
    this.api.employeeapicallbyid(this.id.id).subscribe(result =>{
        console.log("result")
    })
    

  }

}

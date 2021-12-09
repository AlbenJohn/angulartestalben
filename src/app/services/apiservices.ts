import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";


@Injectable({
    providedIn:"root"
})
export class ApiServices{
mainurl = "https://retoolapi.dev/S0rKAx/employees";
comurl = "https://retoolapi.dev/hhp7Oo/companies";
public liveloadjsonurl:any = '../assets/JSON/';

constructor(private httpclient:HttpClient){}
   
    JSONcolumoptions(name)
    {
      let url = this.liveloadjsonurl+name+'.json'
      return new Promise(resolve =>{
        return this.httpclient.get(url).subscribe(result=>{
          resolve(result)
        })
      })
    }
 //Emploayee Api Call
    public employeeapicall(){
    return this.httpclient.get(this.mainurl);
    }

     //Emploayee by id Api Call
     public employeeapicallbyid(id){
      
        return this.httpclient.get(this.mainurl+"?fullName="+id);
    }

    //delete Employee
    public deleteemployee(id) {
       return this.httpclient.delete(this.mainurl +"/"+ id);
      }



      //Company Api Call
    public Companyapicall(){
        return this.httpclient.get(this.comurl);
        }
    
         //Emploayee by id Api Call
         public Companyapicallbyid(id){
          
            return this.httpclient.get(this.comurl+"?compaName="+id);
        }
    
        //delete Employee
        public deleteCompany(id) {
           return this.httpclient.delete(this.comurl +"/"+ id);
          }



}

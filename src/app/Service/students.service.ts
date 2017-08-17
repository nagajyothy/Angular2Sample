import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { studentList } from './mock-students';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { students } from './students';
@Injectable()
export class StudentsService{
studentList: students[];
     constructor(private http:Http){
    console.log(http);
  }
//   extractdata(res:Response)
//   {
//     return res.json();
//   } 
  public getStudents():Observable<students[]>{
    //return this.http.get('app/Service/students.json').map( res => res.json().students );
    return Observable.of<students[]>(studentList).map(std=>this.studentList = std ).catch(this.handleError);
  }
heroesPromise = Promise.resolve(studentList);
  getStudent(id:any) {
    debugger;
    //this.studentList =this.http.get('app/Service/students.json').map( res => res.json().students );
    return studentList.find(std => std.id == id);
    //return this.heroesPromise
     // .then(heroes => heroes.find(h => h.id === +id));
  }

private handleError (error: Response | any) {
  // In a real world app, you might use a remote logging infrastructure
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}


//Prime NG Examples ====================== Services=============================================

  filterUserByname(stdName:string){
    
  }


}

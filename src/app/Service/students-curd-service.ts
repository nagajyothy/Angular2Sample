import { Injectable, Component, Input,Output } from '@angular/core';
import { studentList } from './mock-students';
import { Observable } from 'rxjs/Rx';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { students } from './students';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class StudentCurdService{
stdlist:students;
@Input()
counter:number = 0;
constructor(private _router:Router){}
    getStudents():Promise<students[]>
    {   
        debugger;
        return Promise.resolve(studentList);        //To return list of students from json collection using promise.

    }
     
    addStudent(stdObj:students): void {
        debugger;
        console.log(studentList.findIndex(s=>s.id == stdObj.id));
        if(studentList.findIndex(s=>s.id == stdObj.id)==-1)
        {
                debugger;
		this.getStudents().then(std => {
		     let maxIndex = std.length - 1;
		     let stdWithMaxIndex = std[maxIndex];
		     stdObj.id = stdWithMaxIndex.id + 1;
		     std.push(stdObj);}
		);
        }
        else
        {
            this.getStudents().then(std=>{
                let index = std.findIndex(s=>s.id == stdObj.id);
                std[index].name = stdObj.name;
                std[index].age = stdObj.age;
                std[index].email = stdObj.email;
            })
        }
        this._router.navigate(['/dashboard/students']);
    }

    getStudent(id:number):Promise<students> {
        debugger;
        return this.getStudents().then(std=>std.find(stdcheck=>stdcheck.id === id));
    }
    deleteStudent(id:number):void{
        this.getStudents().then(std=>
        { 
            let stdIndex= std.findIndex(stdObj=>stdObj.id== id);        //to get the index of student
            std.splice(stdIndex,1);
        }
        );
    }
}

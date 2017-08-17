import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { ROUTER_DIRECTIVES } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../Service/students.service';
import { students } from '../Service/students';
import { Location } from '@angular/common';
import {ButtonModule} from 'primeng/primeng';   //for primeng controls
@Component({
  selector: 'students',
  //template:'<h2>Students Page</h2>'
  templateUrl: './app.students.component.html',
  styleUrls: ['app/app.component.styles.css'],
  //directives: [ROUTER_DIRECTIVES]
  providers: [StudentsService]
})
export class StudentsComponent implements OnInit {
  stdDetails: students;
  id: any;
  paramsSub: any;
  stdEdit: boolean = false;

  constructor(private studentsService: StudentsService, private route: ActivatedRoute, private _location: Location) {

  }

  ngOnInit() {
    debugger;
    this.paramsSub = this.route.params.subscribe(params => this.id = parseInt(params['id']));
    this.stdDetails = this.studentsService.getStudent(this.id);
    this.stdEdit = false;
    // this.stdId = this.stdDetails.id;
    // this.stdName= this.stdDetails.name;
    // this.stdAge = this.stdDetails.age;
    // this.stdMail = this.stdDetails.email;
   
    //this.studentsService.getStudent(this.id).then(std => this.stdDetails = std);
  }
  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
  backClicked() {
    this._location.back();
  }
  stdSubmit() {
this.stdEdit = true;
  }

}
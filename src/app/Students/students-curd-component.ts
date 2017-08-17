import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { students } from '../Service/students';
import { StudentCurdService } from '../Service/students-curd-service';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { NgForm } from '@angular/forms';
@Component({
    selector: 'studentsCurd',
    template: `
    
    <div class="container">
        <form #frmStdCurd="ngForm" (ngSubmit)="onSubmit(frmStdCurd)" > 
        <div class="form-group">
            <label for="id"> Id </label>
            <label name="id"  class="form-control">{{stdObj.id}}</label>
        </div>
        <div class="form-group">
            <label for="name"> Name </label>
            <input type="text" name="name" [(ngModel)]="stdObj.name" class="form-control" required />
        </div>
        <div class="form-group">
            <label for="age"> Age </label>
            <input type="number" name="age" [(ngModel)] ="stdObj.age" class="form-control" required />
        </div>
        <div class="form-group">
            <label for="mail">Mail </label>
            <input type="text" name="mail" [(ngModel)]="stdObj.email" class="form-control" required/>
        </div>
        <!-- prime button css-->
         <button pButton type="button" class="ui-button-success" (click)="stdSubmit()" icon="fa-check" iconPos="left" label="{{btntitle}}"></button>
        <!-- <button type="button" class="btn btn-success" (click)="stdSubmit()"  [disabled]="!frmStdCurd.form.valid">{{btntitle}}</button>-->
         <button type="button" class="btn btn-danger" (click)="goback()"><i class="fa fa-times-circle" aria-hidden="true"></i>Cancel</button>
      </form>
    </div>
    `,
    //templateUrl: './students-curd-component.html',
    styleUrls: ['app/app.component.styles.css'],
    providers: [StudentCurdService]

})

export class StudetnsCurdCompoenent implements OnInit {
    stdObj = new students();

    btntitle: string = "Update";
    constructor(private _stdService: StudentCurdService, private _route: ActivatedRoute, private location: Location) {

    }
    ngOnInit(): void {
        debugger;
        this._route.params
            .switchMap((params: ParamMap) => this._stdService.getStudent(+params['id']))
            .subscribe(std => {
                if (std) {
                    console.log("selected student:" + std)
                    this.stdObj = std;
                    this.btntitle="Update";
                }
                else {
                    this.stdObj = new students();
                    this._stdService.getStudents().then(std => {
                        let maxIndex = std.length - 1;
                        let stdWithMaxIndex = std[maxIndex];
                        this.stdObj.id = stdWithMaxIndex.id + 1;
                    });
                    this.btntitle="Add";

                }

            });
           

    }
    stdSubmit(std: students) {
        this._stdService.addStudent(this.stdObj)

    }
    goback() {
        this.location.back();
    }

}
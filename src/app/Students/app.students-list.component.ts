import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentsService } from '../Service/students.service';
import { students } from '../Service/students';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentCurdService } from '../Service/students-curd-service';
import { SpinnerComponent } from '../Spinner/spinnerEx.component';  
@Component({
    selector: 'studentslist',
    templateUrl: './app.students-list.component.html',
    styleUrls:     ['app/app.component.styles.css'],
    providers: [StudentsService,StudentCurdService]
})
export class StudentsListComponent {
    stdList: students[];
    test='nagajyothy';
     public isRequesting: boolean;
    constructor(private _studentsService: StudentCurdService,private router:Router) {
        debugger;
        this.refresh();
       // _studentsService.getStudents() //We get an Observable<Array> object returned.

          //  .subscribe(std => this.stdList = std);
        //_studentsService.getStudents().then(std=>this.stdList = std); //when you use prmoise

    }
    private route: ActivatedRoute
    
    getstdDet(stdobj:any)
    {
        debugger;
        this.router.navigate([ '/dashboard/studentsCurd' ,stdobj.id]);
        //this.router.navigate([ '/students' , stdobj.id]);
    }
    editStudent(stdId:number)
    {
        this.router.navigate([ '/dashboard/studentsCurd' ,stdId]);
    }
    removeStudent(stdId:number){
        this._studentsService.deleteStudent(stdId);
    }
 public refresh(): void {
        this.isRequesting = true;
         setTimeout(() => {
       this._studentsService.getStudents().then(std=>{this.stdList = std
        this.stopRefreshing();
    }); //when you use prmoise
         },2000);
    }

    private stopRefreshing() {
        this.isRequesting = false;
    }


}
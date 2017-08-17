import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { StudentCurdService } from '../Service/students-curd-service';
import { students } from '../Service/students';

@Component({
    selector: 'employee',
    //template:'<h2>Registration Checking</h2>'
    templateUrl: './app.register.component.html',
    styleUrls:     ['app/app.component.styles.css'],
    providers:[StudentCurdService]
})
export class RegisterComponent {
    emailIsInvalid:boolean = false;
    stdList:students[];
constructor(private _stdService : StudentCurdService){

}
onSubmit(regForm:NgForm){
debugger;
this._stdService.addStudent(regForm.value );
}


 emailValidator(email:string): boolean {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!EMAIL_REGEXP.test(email)) {
            return false;
        }
        return true; 
    }

    onChangeIsprimarySkill(event:any)
    {
        console.log(event);
    }
}
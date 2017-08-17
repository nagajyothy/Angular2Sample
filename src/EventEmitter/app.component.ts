import {Component} from '@angular/core';
import {Student} from './student';
@Component({
    selector: 'my-app',
    templateUrl: 'EventEmitter/app.component.html'
})
export class AppComponent {
    title = 'Update Person';
	fullName = '';
	studentObj = new Student(100, 'Mahesh', 'Sharma');
	saveData(emp:any) {
        debugger;
	    this.fullName = emp.fname + ' ' + emp.lname ;
    }		
} 
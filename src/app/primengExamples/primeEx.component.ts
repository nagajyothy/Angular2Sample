import { Component } from '@angular/core';
import { AutoCompleteModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { StudentsService } from '../Service/students.service';
import { students } from '../Service/students';
import { GrowlModule } from 'primeng/primeng';
import { Message } from 'primeng/primeng';
 import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    selector: 'primeExample',
    templateUrl: './primeEx.component.html',
    styleUrls: ['app/app.component.styles.css'],
    //providers: [StudentsService]
     providers: [StudentsService,ConfirmationService]
})
export class PrimeNgComponent {
        //confirmationService: any;

    name: string;
    filterUser: any[];
    stdList: students[];
    // constructor(private _stdService: StudentsService,private confirmationService: ConfirmationService) {
         constructor(private _stdService: StudentsService,private confirmationService: ConfirmationService) {
        _stdService.getStudents().subscribe(std => this.stdList = std);
    }
    notifyMsg: Message[] = [];
    msgs: Message[] = [];
    filterUserList(event: any) {
        debugger;
        let stdName = event.query;          //Here It Gets The enterdtext in textbox.
        this._stdService.getStudents().subscribe(res => {
            this.filterUser = this.filterUserByName(stdName, res);
            
        });
        

    }
    filterUserByName(name: string, userList: students[]) {
        let stdListNew: any[] = [];
        this.stdList = [];
        userList.forEach(std => {
            if (std.name.toLowerCase().indexOf(name.toLowerCase()) ==0 ) {     //to search wether name is exist or not 
                stdListNew.push(std);
                this.stdList.push(std);
            }
        });
        return stdListNew;
    }
    selectedStd(std: any) {
        console.log(std);
        this.notifyMsg = [];
        this.notifyMsg.push({ severity: 'success', summary: std.name + ' was selected' });
        // this.msgs.push({severity:'success', summary:std.name+' was selected ', detail:std.name+' was selected '});
        this.stdList = [];
        this.stdList.push(std);
        this.confirm();
    }

    resetList()
    {
        debugger;
         this.stdList = [];
      this._stdService.getStudents().subscribe(std => this.stdList = std);
    }

  
     confirm() {
         this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'fa fa-question-circle',
            accept: () => {
                debugger;
                this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
            },
            reject: () => {
                this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
     }


}

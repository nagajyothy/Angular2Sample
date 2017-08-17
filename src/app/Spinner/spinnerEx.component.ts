
import {Component, Input, OnDestroy} from '@angular/core';

@Component({
    selector: 'my-spinner',
    templateUrl: './spinnerEx.component.html',    
    // template:`<div class="black_overlay">
    //     <div class="loading">
    //     </div>
    // </div>`,
    styleUrls:     ['app/spinner/spinnerExample.css'],
})
// export class SpinnerComponent implements OnDestroy {
    export class SpinnerComponent  {
    private currentTimeout: number;
    private isDelayedRunning: boolean = false;

    @Input()
    public delay: number = 300;

    @Input()
    public set isRunning(value: boolean) {
this.isDelayedRunning = value;
    }
    //     if (!value) {
    //         this.cancelTimeout();
    //         this.isDelayedRunning = false;
    //         return;
    //     }

    //     if (this.currentTimeout) {
    //         return;
    //     }

    //    setTimeout(() => {
    //         this.isDelayedRunning = value;
    //         this.cancelTimeout();
    //     }, this.delay);
    // }

    // private cancelTimeout(): void {
    //     clearTimeout(this.currentTimeout);
    //     this.currentTimeout = undefined;
    // }

    // ngOnDestroy(): any {
    //     this.cancelTimeout();
    // }
}
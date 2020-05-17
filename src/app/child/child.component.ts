import { Component } from '@angular/core';
import { DataStoreService } from '../services/data-store-service';

@Component({
    selector: 'app-child',
    template: ` 
        <div class="notification is-primary">
            <h1>Child Component</h1>
            Message {{message}}
            <button (click)="changeMessage()">Send Message</button>
        </div>
    `
})
export class ChildComponent {
    message: string;
    constructor(private dataStoreService: DataStoreService) {
    }

    ngOnInit() {
        this.dataStoreService.currentMessage.subscribe(message => this.message = message);

    }

    changeMessage() {
        this.dataStoreService.changeMessage("Hello from child component!!!")
    }
}
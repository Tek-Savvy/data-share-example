import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../services/data-store-service';

@Component({
    selector: 'app-parent',
    template: `
        <h1>Parent Component</h1>
        Message : {{message}}
        <button (click)="changeMessage()">Send Message</button>
    `
})
export class ParentComponent implements OnInit {
    message: string;
    constructor(private dataStoreService: DataStoreService) {
    }

    ngOnInit() {
        this.dataStoreService.currentMessage.subscribe(message => this.message = message);
    }

    changeMessage() {
        this.dataStoreService.changeMessage("Hello from parent component!!!")
    }
}
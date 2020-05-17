import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../services/data-store-service';

@Component({
    selector: 'app-sibling',
    template: `
        <h1>Sibling Component</h1>
        Message : {{message}}
        <button (click)="changeMessage()">Send Message</button>
    `
})
export class SiblingComponent implements OnInit {

    message: string;
    constructor(private dataStoreService: DataStoreService) {
    }

    ngOnInit() {
        this.dataStoreService.currentMessage.subscribe(message => this.message = message);
    }

    changeMessage() {
        this.dataStoreService.changeMessage("Hello from Sibling component!!!")
    }
}
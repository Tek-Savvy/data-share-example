import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SiblingComponent } from './sibling/sibling.component';

import { DataStoreService } from './services/data-store-service';

@NgModule({

  declarations: [
    SiblingComponent,
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],

  providers: [
    DataStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

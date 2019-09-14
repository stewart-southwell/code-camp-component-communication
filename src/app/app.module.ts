import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { CommunicationModule } from './communication/communication.module';
import { SubjectsModule } from './subjects/subjects.module';

@NgModule({
  imports: [ 
    BrowserModule, 
    CoreModule,
    AppRoutingModule,
    CommunicationModule,
    SubjectsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FComponentComponent } from './f-component/f-component.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { StructuralComponent } from './structural/structural.component';

@NgModule({
  declarations: [
    AppComponent,
    FComponentComponent,
    ParentComponent,
    ChildComponent,
    StructuralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

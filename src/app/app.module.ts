import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FComponentComponent } from './f-component/f-component.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { StructuralComponent } from './structural/structural.component';
import { ContentDemoComponent } from './content-demo/content-demo.component';
import { ErrorsDirective } from './errors.directive';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { CustomValidationDemoComponent } from './custom-validation-demo/custom-validation-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    FComponentComponent,
    ParentComponent,
    ChildComponent,
    StructuralComponent,
    ContentDemoComponent,
    ErrorsDirective,
    ErrorMessageComponent,
    CustomValidationDemoComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
